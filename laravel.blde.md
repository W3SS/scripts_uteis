Arquivos blade e javascript.
option#0
@section('scripts')
@include('javascript.views.view1')
@stop

option#1
<body>

	@yield('content')

	@include('_partial.scripts')
	
	@yield('page-script')
	
	@include('_partial.footer')

</body>

option#2
@section('title', 'My Awesome Page')

@section('content')
	My DataTables...
@stop

@section('page-script')
<script type="text/javascript">
	// my custom script
</script>
@stop

option#3
<div id="main" class="row">
    @include('partials.flash')
    @yield('content')
</div>
...
@yield('scripts')

A estrutura da minha pasta é a seguinte:

aplicativo/views/view1.blade.php, javascript/views/view1.blade.php

Estrutura do Diretório

Introdução
O Diretório Raiz
O appDiretório
O bootstrapDiretório
O configDiretório
O databaseDiretório
O publicDiretório
O resourcesDiretório
O routesDiretório
O storageDiretório
O testsDiretório
O vendorDiretório
O Diretório de aplicativos
O ConsoleDiretório
O EventsDiretório
O ExceptionsDiretório
O HttpDiretório
O JobsDiretório
O ListenersDiretório
O MailDiretório
O NotificationsDiretório
O PoliciesDiretório
O ProvidersDiretório

Introdução

A estrutura de aplicação padrão do Laravel destina-se a fornecer um excelente ponto de partida para aplicativos grandes e pequenos. Claro, você é livre para organizar seu aplicativo, como quiser. Laravel impõe quase nenhuma restrição sobre onde qualquer classe está localizada - desde que o Composer possa autoload a classe.

Onde está o diretório dos modelos?

Ao começar com o Laravel, muitos desenvolvedores estão confusos com a falta de um  modelsdiretório. No entanto, a falta desse diretório é intencional. Nós achamos a palavra "modelos" ambígua, pois significa muitas coisas diferentes para muitas pessoas diferentes. Alguns desenvolvedores referem-se ao "modelo" de uma aplicação como a totalidade de toda a lógica de negócios, enquanto outros se referem a "modelos" como classes que interagem com um banco de dados relacional.

Por esse motivo, escolhemos colocar modelos Eloquent no appdiretório por padrão e permitir que o desenvolvedor os coloque em outro lugar se eles escolherem.


O Diretório Raiz


O Diretório de aplicativos

O appdiretório, como você poderia esperar, contém o código principal da sua aplicação. Exploraremos este diretório com mais detalhes em breve; no entanto, quase todas as classes em seu aplicativo serão neste diretório.


O Diretório Bootstrap

O bootstrapdiretório contém arquivos que inicializam a estrutura e configuram o carregamento automático. Este diretório também abriga um cachediretório que contém arquivos gerados por estrutura para otimização de desempenho, como os arquivos de cache de rota e serviços.


O Diretório de Configuração

O configdiretório, como o nome indica, contém todos os arquivos de configuração do seu aplicativo. É uma ótima idéia ler todos esses arquivos e se familiarizar com todas as opções disponíveis.


O Diretório do Banco de Dados

O databasediretório contém a migração e as sementes do banco de dados. Se desejar, você também pode usar este diretório para armazenar um banco de dados SQLite.


O Diretório Público

O publicdiretório contém o arquivo, que é o ponto de entrada para todas as solicitações que entram no seu aplicativo. Este diretório também abriga seus recursos, como imagens, JavaScript e CSS.index.php


O diretório de recursos

O resourcesdiretório contém seus pontos de vista, bem como seus ativos não processados, como NÃO, SASS ou JavaScript. Este diretório também abriga todos os seus arquivos de idioma.


O Diretório de Rotas

O routesdiretório contém todas as definições de rotas para sua aplicação. Por padrão, vários arquivos de rota são incluídos com Laravel: , , e .web.phpapi.phpconsole.phpchannels.php

O arquivo contém rotas que os lugares no grupo de middleware, que fornece o estado da sessão, proteção CSRF e criptografia de cookies. Se o seu aplicativo não oferece uma API RESTful sem estado, todas as suas rotas provavelmente serão definidas no arquivo.web.phpRouteServiceProviderwebweb.php

O arquivo contém rotas que os lugares no grupo de middleware, que fornece limitação de taxa. Essas rotas são destinadas a ser apátridas, portanto, as solicitações que entram no aplicativo através dessas rotas devem ser autenticadas através de tokens e não terão acesso ao estado da sessão.api.phpRouteServiceProviderapi

O arquivo é onde você pode definir todos os seus comandos de console baseados no encerramento. Cada encerramento é vinculado a uma instância de comando permitindo uma abordagem simples para interagir com os métodos IO de cada comando. Mesmo que este arquivo não defina rotas HTTP, ele define pontos de entrada baseados em console (rotas) em seu aplicativo.console.php

O arquivo é onde você pode registrar todos os canais de transmissão de eventos que seu aplicativo admite.channels.php


O diretório de armazenamento

O storagediretório contém os modelos de lâmina compilados, as sessões baseadas em arquivos, os caches de arquivos e outros arquivos gerados pelo framework. Este diretório é segregado em app,  frameworke logsdiretórios. O appdiretório pode ser usado para armazenar os arquivos gerados pelo seu aplicativo. O frameworkdiretório é usado para armazenar arquivos gerados por estrutura e caches. Finalmente, o logsdiretório contém os arquivos de log do seu aplicativo.

O diretório pode ser usado para armazenar arquivos gerados pelo usuário, como avatares de perfil, que devem ser acessíveis ao público. Você deve criar um link simbólico em que pontos para este diretório. Você pode criar o link usando o comando.storage/app/publicpublic/storagephp artisan storage:link


O Diretório de Testes

O testsdiretório contém seus testes automatizados. Um exemplo de PHPUnit é fornecido fora da caixa. Cada classe de teste deve ser sufixada com a palavra Test. Você pode executar seus testes usando os comandos phpunitou .php vendor/bin/phpunit


O Diretório do Fornecedor

O vendordiretório contém as dependências do Composer .


O Diretório de aplicativos

A maioria da sua aplicação está alojada no appdiretório. Por padrão, este diretório é namespaced abaixo Appe é autoloaded pelo Composer usando o padrão de autoloading PSR-4 .

O appdiretório contém uma variedade de diretórios adicionais, tais como Console, Http, e  Providers. Pense nos diretórios Consolee Httpcomo fornecendo uma API no núcleo da sua aplicação. O protocolo HTTP e a CLI são ambos os mecanismos para interagir com seu aplicativo, mas na verdade não contêm lógica da aplicação. Em outras palavras, eles são simplesmente duas maneiras de emitir comandos para sua aplicação. O Consolediretório contém todos os seus comandos Artisan, enquanto o Httpdiretório contém seus controladores, middleware e solicitações.

Uma variedade de outros diretórios serão gerados dentro do appdiretório, pois você usa os  makecomandos Artisan para gerar classes. Assim, por exemplo, o diretório não existirá até que você execute o comando Artisan para gerar uma classe de trabalho.app/Jobsmake:job

Muitas das classes no appdiretório podem ser geradas pelo Artisan via comandos. Para revisar os comandos disponíveis, execute o php artisan list makecomando no seu terminal.

O diretório do console

O Consolediretório contém todos os comandos personalizados do Artisan para sua aplicação. Esses comandos podem ser gerados usando o comando. Este diretório também abriga o kernel do console, que é onde seus comandos Custom Artisan são registrados e suas tarefas agendadas são definidas.make:command


O diretório de eventos

Este diretório não existe por padrão, mas será criado para você pelos comandos e Artisan. O diretório, como você poderia esperar, abriga aulas de eventos . Os eventos podem ser usados ​​para alertar outras partes do seu aplicativo que uma determinada ação ocorreu, proporcionando uma grande flexibilidade e desacoplamento.event:generatemake:eventEvents


O Diretório de Exceções

O Exceptionsdiretório contém o manipulador de exceção do seu aplicativo e também é um bom lugar para colocar quaisquer exceções lançadas pelo seu aplicativo. Se você quiser personalizar como suas exceções são registradas ou renderizadas, você deve modificar a Handlerclasse neste diretório.


O diretório Http

O Httpdiretório contém seus controladores, middleware e solicitações de formulário. Quase toda a lógica de lidar com as solicitações que entram no seu aplicativo será colocada neste diretório.


Diretório de Empregos

Este diretório não existe por padrão, mas será criado para você se você executar o comando Artisan. O diretório abriga os trabalhos de fila para sua aplicação. Os trabalhos podem ser enfileirados pelo seu aplicativo ou executar de forma síncrona dentro do ciclo de vida atual da solicitação. Os trabalhos que funcionam de forma síncrona durante a solicitação atual são às vezes referidos como "comandos", uma vez que são uma implementação do padrão de comando .make:jobJobs


O Diretório Listeners

Este diretório não existe por padrão, mas será criado para você se você executar os comandos ou Artisan. O diretório contém as classes que lidam com seus eventos . Os ouvintes de eventos recebem uma instância de evento e executam lógica em resposta ao evento que está sendo disparado. Por exemplo, um evento pode ser tratado por um ouvinte.event:generatemake:listenerListenersUserRegisteredSendWelcomeEmail


O Diretório de Correio

Este diretório não existe por padrão, mas será criado para você se você executar o comando Artisan. O diretório contém todas as suas classes que representam e-mails enviados pelo seu aplicativo. Os objetos de email permitem encapsular toda a lógica de construção de um e-mail em uma única classe simples que pode ser enviada usando o método.make:mailMailMail::send


O diretório de notificações

Este diretório não existe por padrão, mas será criado para você se você executar o comando Artisan. O diretório contém todas as notificações "transacionais" que são enviadas pelo seu aplicativo, como notificações simples sobre eventos que acontecem dentro do seu aplicativo. Os recursos de notificação da Laravel resumem o envio de notificações sobre uma variedade de drivers, como email, Slack, SMS ou armazenados em um banco de dados.make:notificationNotifications


Diretório de Políticas

Este diretório não existe por padrão, mas será criado para você se você executar o comando Artisan. O diretório contém as classes de políticas de autorização para sua aplicação. As políticas são usadas para determinar se um usuário pode executar uma determinada ação contra um recurso. Para mais informações, confira a documentação de autorização .make:policyPolicies


Diretório de provedores

O Providersdiretório contém todos os provedores de serviços para sua aplicação. Os provedores de serviços inicializam seu aplicativo vinculando serviços no contêiner do serviço, registrando eventos ou executando quaisquer outras tarefas para preparar o seu pedido para pedidos recebidos.
Em um novo aplicativo Laravel, esse diretório já contém vários provedores. Você é livre para adicionar seus próprios provedores a este diretório conforme necessário.


/server
|-api (replaces the APP folder)
|
|--v1/
|---Controllers/
|---Middleware/
|---Repositories
|---Traits
|---routes.php
|--Core(Kernels)
|--Models
|--Jobs
|--Providers
|
|-bootstrap
|-config
|-database
|-resources(laravel blade views (if any) and translations)
|-storage
|-tests(phpunit)
|-composer.json

/admin
|-components
|-views
|--partials/
|-utils
|-services
|-vuex
|-App.vue
|-config.js
|-main.js
|-routes.js
|-index.html
|-package.json
|-webpack.config.js



