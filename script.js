document.getElementById('imageInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8000/resize', true);
    xhr.responseType = 'blob';

    xhr.onload = function() {
        if (this.status === 200) {
            var resizedImage = document.getElementById('resizedImage');
            resizedImage.src = URL.createObjectURL(this.response);
        }
    };

    xhr.send(formData);
});
