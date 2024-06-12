function FindProxyForURL(url, host) {

    host = host.toLowerCase();

    if (shExpMatch(host, "*.google.com") || host == "google.com"
	 || host == "claude.ai" || shExpMatch(host, "*.claude.ai")
	 || host == "openai.com" || shExpMatch(host, "*.openai.com")
	 || host == "chatgpt.com" || shExpMatch(host, "*.chatgpt.com")
	 || host == "anthropic.com" || shExpMatch(host, "*.anthropic.com")
         || host == "oaistatic.com" || shExpMatch(host, "*.oaistatic.com"))
        return "PROXY 185.192.246.23:443";

    return "DIRECT";
}