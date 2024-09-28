//import { variables } from "./core/lib";

//const {host, year, hostDev, typeBack, apiVer, hash} = variables();

export function filename() {
    var rutaAbsoluta = self.location.href; //console.log(rutaAbsoluta);
    var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    var rutaRelativa = rutaAbsoluta.substring(posicionUltimaBarra + "/".length, rutaAbsoluta.length);
    return rutaRelativa;
}

export function getQueryVariable(h, sp) {
    var res = h.replace('/' + sp, ""); //console.log(res);
    var val = res.split("/"); console.log(val);
    var query = window.location.search.substring(1); //console.log(query);
    var vars = query.split("&");
    if (query == "") {
        vars = ['mod=' + val[1], 'ext=' + val[2], 'id=' + val[3]];
    }
    return vars;
}

export function urlVars(vars) {
    for (var i = 0; i < vars.length; i++) {
        var GET = vars[i].split("=");
        if (GET[0] == 'mod') { var mod = GET[1]; }
        if (GET[0] == 'ext') { var ext = GET[1]; }
        if (GET[0] == 'id') { var id = GET[1]; }
    }
    mod = (mod == '') ? 'Home' : mod.replace("?", "");
    ext = (ext == '' || ext == 'undefined') ? 'index' : ext;
    id = (id == '' || id == 'undefined') ? '' : id;
    const url_var = { mod, ext, id };
    return url_var;
}

export function urlVariables(path){
    const vars = path.split('/'); console.log(vars);
    var mod = vars[0] === '' ? 'Home': vars[0];
    var ext = vars[1] === '' || vars[1] === undefined ? 'index' : vars[1];
    var id = vars[2] === '' || vars[2] === undefined ? '' : vars[2];
    const url_var = { mod, ext, id };
    return url_var;
}

/*export function consoleLocal(type, val) {
    if (host == hostDev) {
        switch (type) {
            case 'log':
                console.log(val);
                break;
            case 'warn':
                console.warn(val);
                break;
            case 'error':
                console.error(val);
                break;
            default:
                console.log(val);
                break;
        }
    }
}*/