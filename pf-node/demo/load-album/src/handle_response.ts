import http = require('http');

function make_error(err_code: string, msg: string): Error {
    const e = new Error(msg);
    e.code = err_code;
    return e;
}

function send_success(res: http.ServerResponse, data: any) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ data }) + '\n');
}

function send_failure(res: http.ServerResponse, code: number, err: Error) {

    res.writeHead(code, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        code: err.code ? err.code : err.name,
        message: err.message
    }) + '\n');

}

function invalid_resource(): Error {
    return make_error('invalid_resource', 'the request resource does not exist');
}

function no_such_albums(): Error {
    return make_error('no_such_albums', 'the specified album does not exist');
}

function missing_data() {
    return make_error('missing_data', 'the post data is not completed!')
}

function bad_json() {
    return make_error("invalid_json",
        "the provided data is not valid JSON");
}

function file_error() {
    return make_error("file_error",
        "file_error");
}


export { no_such_albums, invalid_resource, make_error, send_failure, send_success, missing_data, bad_json, file_error };