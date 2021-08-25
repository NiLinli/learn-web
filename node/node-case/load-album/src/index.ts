
import http = require('http');
import url = require('url');
import { load_album_list, handle_get_albums, handle_list_albums, handle_rename_albums } from './load_album_list';
import { send_failure, invalid_resource } from './handle_response';



function handleIncomingRequest(req: http.IncomingMessage, res: http.ServerResponse): void {
    console.log(`INCOMING REQUEST ${req.method} ${req.url}`);

    const parsed_url = url.parse(req.url as string, true);
    const core_url: string = parsed_url.pathname as string;

    if (core_url === '/albums.json')
        // 获取所有的相册内容
        handle_list_albums(req, res);
    else if (core_url.substr(core_url.length - 12) === '/rename.json'
        && (req.method as string).toLowerCase() === 'post') {
        // /albums/xxxxx/rename.json 重命名相册
        console.log(1123);
        handle_rename_albums(req, res, parsed_url);
    }
    else if (core_url.substr(0, 7) === '/albums'
        && core_url.substr(core_url.length - 5) === '.json')
        // 获取 /albums/something.json 处理某个相册的内容
        handle_get_albums(req, res, parsed_url);

    else
        send_failure(res, 404, invalid_resource())

}

const s = http.createServer(handleIncomingRequest);
s.listen(8090);