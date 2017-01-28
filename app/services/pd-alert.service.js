/**
 * Created by joaovictor on 21/01/2017.
 */

angular.module('pdCurso')
    .service('PdAlertService', PdAlertService);

function PdAlertService(toastr) {

    this.showSuccess = showSuccess;
    this.showError = showError;

    // funções
    function showSuccess(mensagem, titulo) {
        titulo = titulo || 'Ok';

        toastr.success(mensagem, titulo);
    }

    function showError(mensagem, titulo) {
        titulo = titulo || 'Eror';

        toastr.error(mensagem, titulo);
    }

}