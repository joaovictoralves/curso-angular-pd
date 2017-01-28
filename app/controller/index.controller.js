angular.module('pdCurso').controller('IndexController', IndexController);

function IndexController($scope, PdAlertService, $filter) {

    // variaveis vinculados ao escopo
    $scope.nome = 'João Alves';

    $scope.entidade = {};
    $scope.listaPessoa = [];

    // botoes
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.editar = editar;
    $scope.excluir = excluir;

    // declaração de funcoes
    function onClickBotao() {
        console.log('Acionar Botão');
    }

    function salvar() {
        if ($scope.formPessoa.$invalid) {

            angular.forEach($scope.formPessoa.$error, function (errorField) {
                for (var cont = 0; cont < errorField.length; cont++) {
                    errorField[cont].$setTouched();
                }

                // angular.forEach(errorField.length, function (field) {
                //     field.$setTouched();
                // });
            });

            // toastr.error('Campos obrigatórios', 'Atenção');

            PdAlertService.showError('Campos obrigatórios', 'Atenção');

            return;
        }

        $scope.listaPessoa.push($scope.entidade);
        limpar();

        PdAlertService.showSuccess('Dados Salvos', 'Excelente!');
    }

    function limpar() {
        $scope.entidade = {};
        angular.element('#itNome').focus();

        // reseta o form
        $scope.formPessoa.$setUntouched();
    }


    function editar(pessoa) {
        $scope.entidade = angular.copy(pessoa);
    }

    function excluir(index) {
        $scope.listaPessoa.splice(index, 1);

        // toastr.warning('Item removido', 'Excelente!');
    }

}

