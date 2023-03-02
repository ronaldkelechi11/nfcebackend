const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
    e.preventDefault();
    let handler = PaystackPop.setup({
        key: 'pk_test_24d2ff75d3c97bd396ca41c1299dddef9b92f72e', //Replace with live key later
        email: document.getElementById("email-address").value,
        amount: document.getElementById("amount").value * 100,
        ref: '' + Math.floor((Math.random() * 1000000000) + 1),
        channels: ['card', 'bank', 'ussd'],
        onClose: function () {
            //Send message to Node backend to close android window
        },
        callback: function (response) {
            //Payment Complete/Succesful
            var params = {
                amount: document.getElementById("amount").value,
                email: document.getElementById("email-address").value
            }
            let message = 'Payment complete! Reference: ' + response.reference;
            alert(message);
        }
    });
    handler.openIframe();
}