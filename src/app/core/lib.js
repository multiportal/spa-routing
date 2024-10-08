import { title, typeBack, typeDev, path_hash, path_src, path_page, hostDev, hostPre, Api, apiVer } from './env';
import { filename, urlVariables } from '../functions';
//import { controlRoutes, router, pages, pagesSys } from '../../routes/index.routes';

function variables() {
    /*VARIABLES SYS*/
    var w = window;
    var d = document;
    var loc = w.location;
    var dt = new Date();
    var day = dt.getDate();
    day = (day < 10) ? '0' + day : day;
    var mon = dt.getMonth() + 1;
    mon = (mon < 10) ? '0' + mon : mon;
    var year = dt.getFullYear();
    var fecha = year + '-' + mon + '-' + day

    /*VARIABLES DE ENTORNO*/
    //const proyecto = 'mandragoraJS'; //PROYECTO
    //const path_hash = '#/'; //path_hash
    //const path_src = 'src/'; //RESOURCE PATH
    //const path_page = path_src + 'pages/'; //PAGE PATH

    /*VARIABLES CONSTANTES*/
    const { protocol, host, origin, pathname, hash, href, search } = loc;
    const dominio = origin + '/';
    const dominio1 = origin;
    const URL = href;
    const quest = search; // [OBSOLETA] -> Obtención del valor de las variable ej. ?mod=producto&ext=cate
    const path_url = pathname.replace("/", "");
    const base_url = dominio + path_url;
    const path_root = (host == 'localhost' || (host != hostDev && host != hostPre)) ? path_url + path_hash : path_hash;//Revisar
    const path_build = (host == 'localhost:9001') ? '../' : './'; //Revisar
    const page_url = dominio + path_root;//
    const screenw = screen.width;
    const screenh = screen.height;

    /* VARIABLES */
    var tema = 'default';
    var path_tema = 'temas/' + tema + '/';
    var pag_name = filename();
    //var vars_Url = getQueryVariable(hash, path_hash);// 
    //let { mod, ext, id } = urlVars(vars_Url);//Cambiar a Hash 
    //var url_m = base_url + path_page + mod + '/' + ext + '.html';
    //mod = fileExist(mod,url_m);

    let { mod, ext, id } = urlVariables(path_url);
    var ext2 = '/' + ext;
    var route = mod + ext2;
    var modh = (mod) ? mod : '';
    var exth = (ext && ext != 'index') ? '/' + ext : '';
    var hash2 = '#/' + modh + exth;
    var url_mod = dominio + path_page + route + '.html';
    var url_404 = dominio + path_page + '404/index.html';
    /////////////////////

    const v = {
        w,
        d,
        loc,
        dt,
        day,
        mon,
        year,
        fecha,
        title,
        typeBack,
        typeDev,
        //proyecto,//NOT
        path_hash,
        path_src,//NOT
        path_page,//NOT
        hostDev,
        hostPre,
        protocol,
        host,
        dominio,
        dominio1,
        pathname,
        hash, //Load
        URL, //Load
        //quest,
        path_url,
        //path_root,
        path_build,
        base_url,
        page_url,
        screenw,
        screenh,
        tema,
        path_tema,
        pag_name, //Load
        //vars_Url, //Load
        mod, //Load
        ext, //Load
        id, //Load
        ext2, //Load
        route, //Load
        hash2,
        url_mod, //Load-NOT
        url_404, //NOT
        apiVer
    };
    return v;
}

/* FUNCIONES */
function load() {
    const v = variables(); console.log(v);//consoleLocal('log', v);
    const { hash, mod, ext, id, page_url, base_url, title } = v;
    //router(hash, mod, ext, id, title);
    //controlRoutes(v);
    //menuWeb(hash, mod, pages, pagesSys);
    //Redirect to #/ (Home)
    //reload(mod, page_url);
    //compVersion(mod, base_url);
    //routeLoad();
}

function inicio() {
    console.log('Run function inicio');
    load();
}

export { inicio, load, variables };

