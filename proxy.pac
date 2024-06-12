function FindProxyForURL(url, host) {

alert(host);

    host = host.toLowerCase();

    if (shExpMatch(host, "*.google.com") || host == "google.com"))
        return "PROXY 185.192.246.23:443";

    return "DIRECT";
}