$(function () {
    // Set up formatting for Credit Card fields
    $('#inputCardNo').formatCardNumber();
    $('#inputValidity').formatCardExpiry();
    $('#inputCVV').formatCardCVC();
});