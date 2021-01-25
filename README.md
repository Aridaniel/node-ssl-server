## Created a SSL certification for localhost

* It is not validated from third party so it looks like its a INVALID certificate but since its localhost, it is said not practical to get it validated from third party. 

* Youll need to npm start the server first before checking the site

* Remember to check it on https://localhost:3443/ , if its not working you might need to go to   chrome://flags/     and enable the "Allow Invalid certificate" , only thing youll see on the page is 'Hallo from SSL SERVER'.

* To see the certificate check the NOT SECURE to left of the url, there you will see certificate.



* * Ran these command in terminal  to make the KEY, CSR and CERT

* Generate private key
* openssl genrsa -out key.pem

* Create a CSR (certificate signing request) using aprivate key.
* openssl req -new -key key.pem -out csr.pem

* Create SSL cerification from CSR
* openssl x509 -req -days 30 -in csr.pem -signkey key.pem -out cert.pemgit 