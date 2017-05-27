(function () {

	'use strict';

	angular
		.module('app.dashboard')
		.controller('Dashboard', Dashboard);

	Dashboard.$inject = ['$http'];

	function Dashboard($http) {

		var vm = this;
		vm.listaDominios = [
			{ ip: 'www.forgeit.com.br '},
			{ ip: 'www.lisaruth.com.br '},
			{ ip: 'www.4fitgymacademia.com.br '},
			{ ip: 'www.extintoresprevencao.com.br '},
			{ ip: 'www.boogabol.com.br '},
			{ ip: 'sistema.mathiasbertram.com.br '},
			{ ip: 'sistema.extintoresprevencao.com.br '},
			{ ip: 'backend.extintoresprevencao.com.br '}
		];

		vm.exibirCards = [];

		vm.listaDominios.forEach(function (values) {
			$http.post('server/ping.php', {ip: values.ip}).then(function (data) {

				var objeto = {
					dominio: values.ip,
					ping: data.data == -1 ? "Offline" : data.data + " ms"
				};

				objeto.cssClass = data.data == -1 ? "list-group-item list-group-item-danger" : "list-group-item list-group-item-success";

				vm.exibirCards.push(objeto);

			});
		});

	}

})();