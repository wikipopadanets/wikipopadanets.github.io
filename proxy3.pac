function FindProxyForURL(url, host) {

    host = host.toLowerCase();

    if (shExpMatch(host, "*.google.com") || host == "google.com"
	 || host == "claude.ai" || shExpMatch(host, "*.claude.ai")
	 || host == "openai.com" || shExpMatch(host, "*.openai.com")
	 || host == "chatgpt.com" || shExpMatch(host, "*.chatgpt.com")
         || host == "ai.google.com" || host == "gemini.google.com"
	 || host == "anthropic.com" || shExpMatch(host, "*.anthropic.com"))
        return "PROXY 185.192.246.23:443";

    return "DIRECT";
}