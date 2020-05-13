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
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'public/build/bundle.js'
        },
        plugins: [
            svelte({
                dev: !production,
            }),
            resolve({
                browser: true,
                dedupe: ['svelte']
            }),
            commonjs(),
            !production && serve(),
            !production && livereload('public'),
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
