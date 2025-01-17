'use strict';
const globals =  require('globals');

module.exports = [{
    languageOptions: {
        globals: {
            ...globals.node,
            $: false,
            angular: false,
            beforeEach: false,
            browser: false,
            browserify: false,
            Buffer: false,
            couch: false,
            define: true,
            devel: false,
            dojo: false,
            describe: false,
            expect: false,
            it: false,
            jasmine: false,
            jquery: false,
            mocha: false,
            mootools: false,
            node: false,
            module: false,
            nonstandard: false,
            proccess: false,
            prototypejs: false,
            qunit: false,
            require: false,
            requirejs: false,
            rhino: false,
            runs: false,
            shelljs: false,
            spyOn: false,
            typed: false,
            waits: false,
            waitsFor: false,
            worker: false,
            wsh: false,
            yui: false
        },

        ecmaVersion: 2020,
        sourceType: 'commonjs'
    },

    rules: {
        'brace-style': [2, '1tbs', {}],

        camelcase: [2, {
            properties: 'never'
        }],

        'comma-spacing': [2, {
            after: true
        }],

        'comma-style': ['error', 'last'],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': [1, 'self'],
        'eol-last': 2,

        'id-length': [1, {
            min: 2,
            max: 40,
            exceptions: ['i', 'j', 'k', 'x', 'y', 'z']
        }],

        indent: 2,
        'linebreak-style': [2, 'unix'],
        'max-nested-callbacks': [1, 4],
        'new-parens': 2,
        'no-array-constructor': 1,
        'no-continue': 2,
        'no-mixed-spaces-and-tabs': 2,

        'no-multiple-empty-lines': [2, {
            max: 2
        }],

        'no-nested-ternary': 2,
        'no-new-object': 2,
        'no-spaced-func': 2,

        'no-trailing-spaces': [2, {
            skipBlankLines: true
        }],

        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 1,
        'object-curly-spacing': [2, 'never', {}],
        'one-var': ['error', 'never'],
        'operator-linebreak': [1, 'after'],
        quotes: [2, 'single'],

        'semi-spacing': [2, {
            after: true
        }],

        semi: [2, 'always'],
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [2, 'never'],
        'space-in-parens': [2, 'never'],

        'space-infix-ops': [2, {
            int32Hint: false
        }],

        'space-unary-ops': [2, {
            words: true
        }],

        'wrap-regex': 2,
        'arrow-parens': [2, 'always'],

        'arrow-spacing': [2, {
            before: true,
            after: true
        }],

        'constructor-super': 2,

        'generator-star-spacing': [2, {
            before: false,
            after: true
        }],

        'no-class-assign': 2,
        'no-const-assign': 2,
        'no-this-before-super': 2,
        'object-shorthand': [1, 'always'],
        'prefer-spread': 1,
        'prefer-reflect': 1,
        'require-yield': 2,
        'max-depth': [1, 4],

        'max-len': [1, 120, 4, {
            ignoreComments: false,
            ignoreUrls: true
        }],

        'max-params': [1, 5],
        'max-statements': [1, 20],
        'no-bitwise': 1,
        'comma-dangle': [2, 'never'],
        'no-cond-assign': [2, 'always'],
        'no-console': 1,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-empty': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': [2, 'functions'],
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': [1, 'both'],
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-unreachable': 2,
        'use-isnan': 2,
        'valid-typeof': 2,
        'no-unexpected-multiline': 2,
        'block-scoped-var': 1,
        complexity: [2, 9],
        'consistent-return': 2,
        curly: [2, 'all'],
        'default-case': 1,

        'dot-notation': [1, {
            allowKeywords: true
        }],

        'dot-location': [1, 'property'],
        eqeqeq: 2,
        'no-alert': 2,
        'no-caller': 2,
        'no-else-return': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,

        'no-implicit-coercion': [2, {
            boolean: true,
            number: true,
            string: true
        }],

        'no-implied-eval': 2,
        'no-invalid-this': 1,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 1,

        'no-multi-spaces': ['error', {
            exceptions: {
                Property: true,
                AssignmentExpression: true,
                BinaryExpression: false,
                VariableDeclarator: true,
                ImportDeclaration: true
            }
        }],

        'no-native-reassign': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-octal-escape': 2,
        'no-octal': 2,
        'no-param-reassign': 1,
        'no-proto': 2,

        'no-redeclare': [2, {
            builtinGlobals: true
        }],

        'no-return-assign': [2, 'always'],
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unused-expressions': 2,
        'no-useless-call': 1,
        'no-void': 2,
        'no-with': 2,
        yoda: [2, 'never', {}],
        strict: [2, 'global'],
        'no-catch-shadow': 2,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-shadow-restricted-names': 2,

        'no-shadow': [2, {
            builtinGlobals: true,
            hoist: 'all'
        }],

        'no-undef': 2,
        'no-undefined': 2,
        'no-unused-vars': 2,
        'no-use-before-define': 2,
        'callback-return': 1,
        'handle-callback-err': 1,
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-exit': 1,
        'no-sync': 1,
        'array-bracket-spacing': [2, 'never', {}]
    }
}];
