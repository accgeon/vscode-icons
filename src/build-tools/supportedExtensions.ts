/* tslint:disable max-line-length */
import { languages } from './languages';
import { IExtensionCollection, IFileExtension } from '../models/IExtension';

export const extensions: IExtensionCollection<IFileExtension> = {
  supported: [
    { icon: 'actionscript', extensions: ['as'], svg: true },
    { icon: 'ai', extensions: ['ai'], svg: true },
    { icon: 'angular', extensions: ['angular-cli.json'], filename: true, svg: true },
    { icon: 'ng2_component_ts', extensions: ['component.ts'], svg: true },
    { icon: 'ng2_component_js', extensions: ['component.js'], svg: true },
    { icon: 'ng2_directive_ts', extensions: ['directive.ts'], svg: true },
    { icon: 'ng2_directive_js', extensions: ['directive.js'], svg: true },
    { icon: 'ng2_pipe_ts', extensions: ['pipe.ts'], svg: true },
    { icon: 'ng2_pipe_js', extensions: ['pipe.js'], svg: true },
    { icon: 'ng2_service_ts', extensions: ['service.ts'], svg: true },
    { icon: 'ng2_service_js', extensions: ['service.js'], svg: true },
    { icon: 'ng2_module_ts', extensions: ['module.ts'], svg: true },
    { icon: 'ng2_module_js', extensions: ['module.js'], svg: true },
    { icon: 'ng2_routing_ts', extensions: ['routing.ts'], svg: true },
    { icon: 'ng2_routing_js', extensions: ['routing.js'], svg: true },
    { icon: 'ng2_routing_ts', extensions: ['app-routing.module.ts'], filename: true, svg: true },
    { icon: 'ng2_routing_js', extensions: ['app-routing.module.js'], filename: true, svg: true },
    { icon: 'apache', extensions: ['.htaccess', '.htpasswd'], filename: true, svg: true },
    { icon: 'apib', extensions: ['apib'], svg: true },
    { icon: 'applescript', extensions: ['app'], svg: true },
    { icon: 'appveyor', extensions: ['appveyor.yml', '.appveyor.yml'], filename: true },
    { icon: 'ansible', extensions: ['ansible'], svg: true },
    { icon: 'asp', extensions: ['asp'] },
    { icon: 'aspx', extensions: ['aspx', 'ascx'] },
    { icon: 'assembly', extensions: ['s', 'asm'] },
    { icon: 'autohotkey', extensions: ['ahk'] },
    { icon: 'babel', extensions: ['.babelrc'], filename: true, svg: true },
    { icon: 'bat', extensions: [], languages: [languages.bat] },
    { icon: 'binary', extensions: ['bin', 'o', 'a', 'exe', 'obj', 'lib', 'dll', 'so', 'pyc', 'pyd', 'pyo', 'n', 'ndll', 'pdb', 'cmo', 'cmx', 'cma', 'cmxa', 'cmi'] }, // http://www.file-extensions.org/filetype/extension/name/binary-files
    { icon: 'blade', extensions: ['blade.php'], svg: true },
    { icon: 'bower', extensions: ['.bowerrc', 'bower.json'], filename: true, svg: true },
    { icon: 'buckbuild', extensions: ['.buckconfig'], filename: true, svg: true },
    { icon: 'bundler', extensions: ['gemfile', 'gemfile.lock'], filename: true },
    { icon: 'c', extensions: [], languages: [languages.c] },
    { icon: 'cake', extensions: ['cake'] },
    { icon: 'cfm', extensions: ['cfm', 'cfc', 'lucee'] },
    { icon: 'cheader', extensions: ['h'] },
    { icon: 'class', extensions: ['class'], svg: true },
    { icon: 'clojure', extensions: ['cjm', 'cljc'], languages: [languages.clojure] },
    { icon: 'cmake', extensions: ['CMakeCache.txt', 'CMakeLists.txt', '.cmake'], filename: true, svg: true },
    { icon: 'cobol', extensions: ['cbl', 'cob', 'cpy'] },
    { icon: 'codeclimate', extensions: ['codeclimate.yml'], filename: true },
    { icon: 'coffeescript', extensions: [], languages: [languages.coffeescript] },
    { icon: 'config', extensions: ['env', 'config'], languages: [languages.properties] },
    { icon: 'config', extensions: ['.env.example'], filename: true },
    { icon: 'compass', extensions: [] },
    { icon: 'composer', extensions: ['composer.json', 'composer.lock'], filename: true },
    { icon: 'cpp', extensions: [], languages: [languages.cpp] },
    { icon: 'crystal', extensions: [], languages: [languages.crystal], svg: true },
    { icon: 'csharp', extensions: ['csx'], languages: [languages.csharp] },
    { icon: 'cshtml', extensions: [], languages: [languages.razor] },
    { icon: 'csproj', extensions: ['csproj'] },
    { icon: 'css', extensions: [], languages: [languages.css], svg: true },
    { icon: 'csslint', extensions: ['.csslintrc'], filename: true },
    { icon: 'cssmap', extensions: ['css.map'] },
    { icon: 'cucumber', extensions: ['feature'] },
    { icon: 'dartlang', extensions: ['dart'] },
    { icon: 'delphi', extensions: ['pas', 'dfm', 'dpr'] },
    { icon: 'dlang', extensions: ['d'] },
    { icon: 'diff', extensions: [], languages: [languages.diff], svg: true },
    { icon: 'docker', extensions: ['.dockerignore', 'docker-compose.yml'], filename: true, languages: [languages.dockerfile] },
    { icon: 'editorconfig', extensions: ['.editorconfig'], filename: true },
    { icon: 'ejs', extensions: ['ejs'] },
    { icon: 'elixir', extensions: ['ex', 'exs', 'eex'] },
    { icon: 'elm', extensions: ['elm'] },
    { icon: 'elm', extensions: ['elm-package.json'], filename: true },
    { icon: 'emacs', extensions: ['el', 'elc'], svg: true },
    { icon: 'ember', extensions: ['.ember-cli'], filename: true, svg: true },
    { icon: 'erb', extensions: ['rhtml', 'erb'] },
    { icon: 'erlang', extensions: ['erl', 'hrl'] },
    { icon: 'erlang', extensions: ['emakefile', '.emakerfile'], filename: true },
    { icon: 'eslint', extensions: ['.eslintrc', '.eslintignore', '.eslintrc.js', '.eslintrc.json', '.eslintrc.yaml', '.eslintrc.yml'], filename: true },
    { icon: 'excel', extensions: ['xls', 'xlsx', 'csv', 'ods'] },
    { icon: 'favicon', extensions: ['favicon.ico'], filename: true },
    { icon: 'flash', extensions: ['swf', 'swc', 'sol'] },
    { icon: 'flow', extensions: ['js.flow'] },
    { icon: 'flow', extensions: ['.flowconfig'], filename: true },
    { icon: 'fsharp', extensions: [], languages: [languages.fsharp] },
    { icon: 'font', extensions: ['woff', 'woff2', 'ttf', 'otf', 'eot', 'pfa', 'pfb', 'sfd'] },
    { icon: 'fortran', extensions: ['f90', 'mod', 'f'] },
    { icon: 'git', extensions: ['.gitattributes', '.gitconfig', '.gitignore', '.gitmodules', '.gitkeep'], filename: true, languages: [languages.git], svg: true },
    { icon: 'gitlab', extensions: ['.gitlab-ci.yml'], filename: true },
    { icon: 'go', extensions: [], languages: [languages.go] },
    { icon: 'gradle', extensions: ['gradle'] },
    { icon: 'graphql', extensions: ['gql', 'graphql'], svg: true },
    { icon: 'graphviz', extensions: [] },
    { icon: 'groovy', extensions: [], languages: [languages.groovy] },
    { icon: 'gruntfile', extensions: ['gruntfile.js'], filename: true },
    { icon: 'gulpfile', extensions: ['gulpfile.js'], filename: true, svg: true },
    { icon: 'haml', extensions: ['haml'] },
    { icon: 'handlebars', extensions: [], languages: [languages.handlebars] },
    { icon: 'haskell', extensions: ['has', 'hs', 'lhs', 'lit', 'gf'] },
    { icon: 'haxe', extensions: ['hx', 'hxml'] },
    { icon: 'haxe', extensions: ['haxelib.json'], filename: true },
    { icon: 'haxecheckstyle', extensions: ['checkstyle.json'], filename: true },
    { icon: 'haxedevelop', extensions: ['hxproj'] },
    { icon: 'html', extensions: [], languages: [languages.html], svg: true },
    { icon: 'idris', extensions: ['idr', 'lidr', 'ibc'], svg: true },
    { icon: 'image', extensions: ['jpeg', 'jpg', 'gif', 'png', 'bmp', 'ico'] },
    { icon: 'ini', extensions: [], languages: [languages.ini] },
    { icon: 'ionic', extensions: ['ionic.project'], filename: true },
    { icon: 'ionic', extensions: ['ionic.config.json'], filename: true },
    { icon: 'jade', extensions: [], languages: [languages.pug] },
    { icon: 'jade', extensions: ['.jade-lintrc', '.pug-lintrc', '.jade-lint.json', '.pug-lintrc.js', '.pug-lintrc.json'], filename: true },
    { icon: 'jar', extensions: ['jar'], svg: true },
    { icon: 'java', extensions: [], languages: [languages.java], svg: true },
    { icon: 'jbuilder', extensions: ['jbuilder'], svg: true },
    { icon: 'jest', extensions: ['jest.config.json'], filename: true, svg: true },
    { icon: 'jinja', extensions: ['jinja', 'jinja2'], svg: true },
    { icon: 'js', extensions: [], languages: [languages.javascript], svg: true },
    { icon: 'jshintrc', extensions: ['.jshintrc'], filename: true },
    { icon: 'jsmap', extensions: ['js.map'] },
    { icon: 'json', extensions: [], languages: [languages.json] },
    { icon: 'jsp', extensions: ['jsp'] },
    { icon: 'julia', extensions: ['jl'] },
    { icon: 'karma', extensions: ['karma.conf.js', 'karma.conf.coffee'], filename: true, svg: true },
    { icon: 'kotlin', extensions: ['kt'], svg: true },
    { icon: 'lerna', extensions: ['lerna.json'], filename: true },
    { icon: 'less', extensions: [], languages: [languages.less] },
    { icon: 'license', extensions: ['enc'] },
    { icon: 'license', extensions: ['license', 'licence', 'license.md', 'licence.md'], filename: true },
    { icon: 'lisp', extensions: ['bil'] },
    { icon: 'lime', extensions: ['hxp'] },
    { icon: 'lime', extensions: ['include.xml'], filename: true },
    { icon: 'log', extensions: ['log'] },
    { icon: 'lsl', extensions: ['lsl'] },
    { icon: 'lua', extensions: [], languages: [languages.lua] },
    { icon: 'm', extensions: [], languages: [languages.objectivec] },
    { icon: 'makefile', extensions: ['makefile'] },
    { icon: 'makefile', extensions: [], languages: [languages.makefile] },
    { icon: 'markdown', extensions: ['mdown', 'markdown'], languages: [languages.markdown], svg: true },
    { icon: 'marko', extensions: ['marko'] },
    { icon: 'markojs', extensions: ['marko.js'] },
    { icon: 'markup', extensions: [] },
    { icon: 'matlab', extensions: ['fig', 'mat', 'mex', 'mexn', 'mexrs6', 'mn', 'mum', 'mx', 'mx3', 'rwd', 'slx', 'slddc', 'smv', 'tikz', 'xvc', 'xvc'] },
    { icon: 'masterpage', extensions: ['master'] },
    { icon: 'mustache', extensions: ['mustache', 'mst'] },
    { icon: 'nim', extensions: ['nim', 'nims'] },
    { icon: 'node', extensions: ['.nvmrc'], filename: true, svg: true },
    { icon: 'npm', extensions: ['.npmignore', '.npmrc', 'package.json'], filename: true, svg: true },
    { icon: 'nsi', extensions: ['nsi', 'nsh'], svg: true },
    { icon: 'nuget', extensions: ['nupkg', 'nuspec', 'psmdcp'] },
    { icon: 'nunjucks', extensions: ['njk', 'nunjucks', 'nunjs', 'nunj', 'njs', 'nj'] },
    { icon: 'ocaml', extensions: ['ml', 'mll', 'mli', 'mly', 'ocamlmakefile', 'merlin'] },
    { icon: 'paket', extensions: ['paket.dependencies', 'paket.lock', 'paket.references', 'paket.template', 'paket.local'], filename: true },
    { icon: 'patch', extensions: ['patch'] },
    { icon: 'pdf', extensions: ['pdf'], svg: true },
    { icon: 'perl', extensions: [], languages: [languages.perl] },
    { icon: 'photoshop', extensions: ['psd'] },
    { icon: 'php', extensions: ['php1', 'php2', 'php3', 'php4', 'php5', 'php6', 'phps', 'phpsa', 'phpt', 'phtml', 'phar'], languages: [languages.php] },
    { icon: 'phpunit', extensions: ['phpunit.xml'], filename: true },
    { icon: 'plantuml', extensions: ['pu', 'plantuml', 'iuml', 'puml'] },
    { icon: 'poedit', extensions: ['po', 'mo'] },
    { icon: 'polymer', extensions: [], languages: [languages.polymer], svg: true },
    { icon: 'postcss', extensions: [], languages: [languages.postcss], svg: true },
    { icon: 'powershell', extensions: [], languages: [languages.powershell] },
    { icon: 'procfile', extensions: ['procfile'], filename: true },
    { icon: 'prolog', extensions: ['pro', 'P'], languages: [languages.prolog] },
    { icon: 'protobuf', extensions: ['proto'] },
    { icon: 'protractor', extensions: ['protractor.conf.js'], filename: true },
    { icon: 'puppet', extensions: ['epp', 'pp'] },
    { icon: 'purescript', extensions: ['purs'], light: true, svg: true },
    { icon: 'python', extensions: [], languages: [languages.python], svg: true },
    { icon: 'qlikview', extensions: ['qvd', 'qvw'] },
    { icon: 'r', extensions: [], languages: [languages.r] },
    { icon: 'rails', extensions: [] },
    { icon: 'rake', extensions: ['rake'], svg: true },
    { icon: 'rake', extensions: ['rakefile'], filename: true, svg: true },
    { icon: 'raml', extensions: ['raml'] },
    { icon: 'reactjs', extensions: [], languages: [languages.javascriptreact] },
    { icon: 'reacttemplate', extensions: ['rt'] },
    { icon: 'reactts', extensions: ['tsx'] },
    { icon: 'rest', extensions: [], languages: [languages.restructuredtext] },
    { icon: 'riot', extensions: ['tag'] },
    { icon: 'robotframework', extensions: ['robot'] },
    { icon: 'rollup', extensions: ['rollup.config.js'], filename: true },
    { icon: 'rspec', extensions: ['.rspec'], filename: true },
    { icon: 'ruby', extensions: [], languages: [languages.ruby], svg: true },
    { icon: 'rust', extensions: [], languages: [languages.rust] },
    { icon: 'saltstack', extensions: ['sls'], svg: true },
    { icon: 'sass', extensions: ['sass'], svg: true },
    { icon: 'scala', extensions: ['scala'] },
    { icon: 'scss', extensions: [], languages: [languages.scss], svg: true },
    { icon: 'settings', extensions: [] },
    { icon: 'shell', extensions: ['fish'], languages: [languages.shellscript] },
    { icon: 'slim', extensions: [] },
    { icon: 'sln', extensions: ['sln'] },
    { icon: 'smarty', extensions: ['tpl', 'swig'] },
    { icon: 'snyk', extensions: ['.snyk'], filename: true, svg: true },
    { icon: 'source', extensions: [] },
    { icon: 'sql', extensions: [], languages: [languages.sql] },
    { icon: 'sqlite', extensions: ['sqlite', 'sqlite3', 'db3'] },
    { icon: 'sss', extensions: ['sss'], svg: true },
    { icon: 'stylelint', extensions: ['.stylelintrc', 'stylelint.config.js'], filename: true },
    { icon: 'stylus', extensions: ['styl'] },
    { icon: 'storyboard', extensions: ['storyboard'] },
    { icon: 'svg', extensions: ['svg'] },
    { icon: 'swift', extensions: [], languages: [languages.swift] },
    { icon: 'swift', extensions: ['Package.pins'], filename: true },
    { icon: 'tcl', extensions: ['tcl', 'exp'] },
    { icon: 'terraform', extensions: ['tf', 'terra'] },
    { icon: 'testjs', extensions: ['test.js', 'spec.js'] },
    { icon: 'testts', extensions: ['test.ts', 'spec.ts'] },
    { icon: 'tex', extensions: ['texi', 'tex'] },
    { icon: 'text', extensions: [], languages: [languages.plaintext] },
    { icon: 'textile', extensions: ['textile'] },
    { icon: 'todo', extensions: ['todo'] },
    { icon: 'toml', extensions: ['toml'], svg: true },
    { icon: 'travis', extensions: ['.travis.yml'], filename: true },
    { icon: 'tslint', extensions: ['tslint.json'], filename: true },
    { icon: 'twig', extensions: ['twig'] },
    { icon: 'typescript', extensions: [], languages: [languages.typescript], svg: true },
    { icon: 'typescriptdef', extensions: ['d.ts'], svg: true },
    { icon: 'vagrant', extensions: ['vagrantfile'], filename: true },
    { icon: 'vash', extensions: ['vash'] },
    { icon: 'vb', extensions: [], languages: [languages.vb] },
    { icon: 'vbhtml', extensions: ['vbhtml'] },
    { icon: 'vbproj', extensions: ['vbproj'] },
    { icon: 'vim', extensions: ['vim'], svg: true },
    { icon: 'vim', extensions: ['.vimrc', '.gvimrc'], filename: true, svg: true },
    { icon: 'volt', extensions: ['volt'] },
    {
      icon: 'vscode',
      extensions: [
        'vscodeignore.json',
        'launch.json',
        'tasks.json',
        'jsconfig.json',
        'tsconfig.json',
        '.vscodeignore',
      ],
      filename: true,
      svg: true,
    },
    { icon: 'vue', extensions: ['vue'] },
    {
      icon: 'webpack',
      extensions: [
        'webpack.config.js',
        'webpack.config.common.js',
        'webpack.config.babel.js',
        'webpack.config.common.babel.js',
        'webpack.config.base.babel.js',
        'webpack.config.dev.babel.js',
        'webpack.config.staging.babel.js',
        'webpack.config.production.babel.js',
        'webpack.config.prod.babel.js',
        'webpack.config.dev.js',
        'webpack.config.staging.js',
        'webpack.config.production.js',
        'webpack.config.prod.js',
        'webpack.config.ts',
        'webpack.config.coffee',
      ],
      filename: true,
      svg: true,
    },
    { icon: 'wxml', extensions: ['wxml'] },
    { icon: 'wxss', extensions: ['wxss'] },
    { icon: 'xib', extensions: ['xib'] },
    { icon: 'xliff', extensions: ['xliff', 'xlf'] },
    { icon: 'xml', extensions: ['pex'], languages: [languages.xml] },
    { icon: 'xsl', extensions: [], languages: [languages.xsl] },
    { icon: 'yaml', extensions: ['yml'], languages: [languages.yaml], svg: true },
    { icon: 'yarn', extensions: ['yarnclean'], svg: true },
    { icon: 'yarn', extensions: ['yarn.lock'], filename: true, svg: true },
    { icon: 'zip', extensions: ['zip', 'rar', '7z', 'tar', 'gz', 'bzip2', 'xz', 'bz2'] },
  ],
};
