import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import {terser} from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default [
    // try-it page
    {
        input: 'src/main.js',
        output: {
            sourcemap: false,
            format: 'iife',
            name: 'app',
            file: 'dist/github-card-playground.min.js'
        },
        plugins: [
            svelte({
                // enable run-time checks when not in production
                dev: !production,
            }),
            resolve({
                browser: true,
                dedupe: ['svelte']
            }),
            commonjs(),

            // In dev mode, call `npm run start` once
            // the bundle has been generated
            !production && serve(),

            // Watch the `public` directory and refresh the
            // browser on changes when not in production
            !production && livereload('public'),

            // If we're building for production (npm run build
            // instead of npm run dev), minify
            production && terser()
        ],
        watch: {
            clearScreen: false
        }
    },
    // production widget
    {
        input: 'src/GithubCard.svelte',
        output: {
            sourcemap: false,
            format: 'iife',
            name: 'app',
            file: 'dist/github-card.min.js'
        },
        plugins: [
            svelte({
                dev: false,
                customElement: true
            }),
            resolve({
                browser: true,
                dedupe: ['svelte']
            }),
            commonjs(),
            terser()
        ]
    }
];

function serve() {
    let started = false;

    return {
        writeBundle() {
            if (!started) {
                started = true;

                require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                    stdio: ['ignore', 'inherit', 'inherit'],
                    shell: true
                });
            }
        }
    };
}
