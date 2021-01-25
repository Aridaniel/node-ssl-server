## Created a SSL certification for localhost

* It is not validated from third party so it looks like its a INVALID certificate but since its localhost, it is said not practical to get it validated from third party. 

* Remember to check it on https://localhost:3443/ , with a S , if its not working you might need to go to   chrome://flags/     and enable the "Allow Invalid certificate" 



* * Ran these command in terminal 

* Generate private key
* openssl genrsa -out key.pem

* Create a CSR (certificate signing request) using aprivate key.
* openssl req -new -key key.pem -out csr.pem

* Create SSL cerification from CSR
* openssl x509 -req -days 30 -in csr.pem -signkey key.pem -out cert.pem