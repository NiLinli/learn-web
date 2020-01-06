import fs = require('fs');
import { IncomingMessage, ServerResponse } from 'http';
import { make_error, send_failure, send_success, no_such_albums, invalid_resource, missing_data, bad_json, file_error } from './handle_response';
import { UrlWithStringQuery, UrlWithParsedQuery } from 'url';

type callbackReadir = (err: Error | null, file_info?: any) => void;

export function load_album(album_name: string, page: number, page_size: number, callback: callbackReadir) {
    fs.readdir('./script04/albums/' + album_name, function (err, files: string[]) {
        if (err) {
            if (err.code === 'ENOENT')
                callback(no_such_albums());
            else
                callback(make_error('file_error', JSON.stringify(err)))
            return;
        }

        console.log('load_album');
        const only_files: any[] = [];
        const path = `./script04/albums/${album_name}/`;
        (function iterator(i) {
            if (i === files.length) {

                const ps = only_files.splice(page * page_size, page_size);

                callback(null, {
                    short_name: album_name,
                    photos: ps
                });
                return;
            }
            fs.stat(path + files[i], (err: Error, stats: fs.Stats) => {
                if (err) {
                    callback(make_error('file_error', JSON.stringify(err)))
                    return;
                }
                if (stats.isFile()) {
                    only_files.push({
                        filename: files[i],
                        desc: files[i]
                    });
                }
                iterator(i + 1);
            });
        })(0);
    });
}

export function load_album_list(callback: callbackReadir) {
    fs.readdir('./script04/albums', function (err, files) {
        if (err) {
            callback(make_error('file_error', JSON.stringify(err)))
            return;
        }

        const only_dirs: any[] = [];

        // 异步 for 和回调不兼容
        // files.forEach((file: string) => {
        //     fs.stat('./script04/albums/' + file, (err: Error, stats: fs.Stats) => {
        //         if (stats.isDirectory())
        //             only_dirs.push(file);
        //     });
        // });
        // callback(null, only_dirs);

        // 递归
        // function iterator(i) {
        //     if (i < array.length) {
        //         async_work(function () {
        //             iterator(i + 1);
        //         });
        //     } else {
        //         callback(results);
        //     }
        // }
        // iterator(0);

        (function iterator(i) {

            if (i === files.length) {
                callback(null, only_dirs);
                return;
            }

            fs.stat('./script04/albums/' + files[i], (err: Error, stats: fs.Stats) => {
                if (err) {
                    callback(make_error('file_error', JSON.stringify(err)))
                    return;
                }

                if (stats.isDirectory()) {
                    only_dirs.push({ name: files[i] });
                }

                iterator(i + 1);
            });

        })(0);




    })
}

export function handle_get_albums(req: IncomingMessage, res: ServerResponse, parsed_url: UrlWithParsedQuery) {
    let core_url = parsed_url.pathname as string,
        album_name = core_url.substr(7, core_url.length - 12),
        getp: any = parsed_url.query,
        page_num = getp.page ? getp.page : 0,
        page_size = getp.page_size ? getp.page_size : 1000;

    if (isNaN(parseInt(page_num))) page_num = 0;
    if (isNaN(parseInt(page_size))) page_size = 1000;





    load_album(album_name, page_num, page_size, function (err, album_content) {
        if (err && err.code === 'no_such_album') {
            send_failure(res, 404, err);
        } else if (err) {
            send_failure(res, 500, err);
        } else {
            send_success(res, { album_data: album_content });
        }
    })
}

export function do_rename(old_name: string, new_name: string, callback: any): void {
    fs.rename(`./script04/albums/${old_name}`, `./script04/albums/${new_name}`, callback)

}

export function handle_list_albums(req: IncomingMessage, res: ServerResponse) {
    load_album_list(function (err, albums) {
        if (err) {
            send_failure(res, 500, err);
            return;
        }

        send_success(res, { albums });
    });
}

export function handle_rename_albums(req: IncomingMessage, res: ServerResponse, parsed_url: UrlWithParsedQuery) {
    // 1. get the album name from the url
    const core_url = parsed_url.pathname as string;
    const parts = core_url.split('/');

    if (parts.length !== 4) {
        send_failure(res, 404, invalid_resource());
    }

    const album_name = parts[2];

    // 2. get the POST data for the request
    let json_body = '';

    req.on('readable', function () {
        const d = req.read();
        if (d) {
            if (typeof d === 'string') {
                json_body += d;
            } else if (typeof d === 'object' && d instanceof Buffer) {
                json_body += d.toString('utf8');
            }
        }
    });

    // 3. when we have all the post data, make sure we have valid data and then try to rename
    req.on('end', function () {
        // did we get a body
        let album_data;
        console.log(json_body)
        if (json_body) {

            try {
                album_data = JSON.parse(json_body);
                console.log(typeof album_data);
                if (!album_data.album_name) {
                    send_failure(res, 403, missing_data());
                    return;
                }
            } catch (error) {
                send_failure(res, 403, bad_json())
            }

            // 4. perform rename
            do_rename(album_name, album_data.album_name, (err: Error, results: any) => {
                if (err && err.code === 'ENOENT') {
                    send_failure(res, 403, no_such_albums());
                    return;
                } else if (err) {
                    send_failure(res, 500, err);
                    return;
                }
                send_success(res, null);
            })

        } else {

            send_failure(res, 403, bad_json());
            res.end();

        }

    });

}

