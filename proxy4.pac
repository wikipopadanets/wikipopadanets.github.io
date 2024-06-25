function FindProxyForURL(url, host) {

    host = host.toLowerCase();

    if (host == "claude.ai" || shExpMatch(host, "*.claude.ai")
	 || host == "openai.com" || shExpMatch(host, "*.openai.com")
	 || host == "chatgpt.com" || shExpMatch(host, "*.chatgpt.com")
	 || host == "anthropic.com" || shExpMatch(host, "*.anthropic.com")
         || host == "oaistatic.com" || shExpMatch(host, "*.oaistatic.com")
	 || host == "oaiusercontent.com" || shExpMatch(host, "*.oaiusercontent.com"))
        return "PROXY 185.192.246.23:443";

    return "DIRECT";
}