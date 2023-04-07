var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)githubassets\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)raw\.githubusercontent\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)googlevideo\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)v2ex\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)googleusercontent\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)openai\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)2022vpn\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)google\.com\.hk$/.test(host)) return "+proxy";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)google\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)jnn-pa\.googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+proxy";
        if (/^192\.168\.1\.1$/.test(host)) return "DIRECT";
        if (/(?:^|\.)qimai\.cn$/.test(host)) return "DIRECT";
        if (/^internal\.example\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)example\.com$/.test(host)) return "+proxy";
        return "DIRECT";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 127.0.0.1:7890; SOCKS 127.0.0.1:7890";
    }
});