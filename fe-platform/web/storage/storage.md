# storage

1. offline detection (兼容性一般)
2. offline event
3. appcache
4. storage  (. The idea is logical: information pertaining to a specific user should live on that user’s machine. )
    - HTTP cookies [cookie_spec](https://curl.haxx.se/rfc/cookie_spec.html)
        + were originally intended to store session information on the client
        + The specification called for the server to send a Set-Cookie HTTP header containing session information as part of any response to an HTTP request.