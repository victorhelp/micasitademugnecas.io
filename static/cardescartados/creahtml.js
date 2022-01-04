var vcontenidohtml = "<html lang='en'><head>    <meta charset='UTF-8'> <meta name='viewport' content='width=device-width, initial-scale=1.0'>    <meta http-equiv='X-UA-Compatible' content='ie=edge'>    <link rel='stylesheet' href='styles.css'>    <title>About</title></head><body>    <h1>About</h1>    <p>    Golang is an open source programming language which allows you to build simple, reliable, and efficient applications. </p>    <p>        <a href='/'>Back to Home</a>    </p></body></html>";

var vllamada = fcreadoc(vcontenidohtml);

function fcreadoc(argcontenido) {
    var vdoc = document.open("text/html","replace");
    vdoc.write(argcontenido);
    vdoc.close();
}