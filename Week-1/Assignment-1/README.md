# What happens when you click on a URL in your browser


**Below are some of the main functions of web browsers**

- The main task is to collect information from the Internet and make it accessible to users.
- A web browser can be used to visit any website. When we type a URL into a browser, the web server redirects us to that website.
- Plugins are available on the web browser to run Java applets and flash content.
- It simplifies Internet surfing because once we arrive at a website, we can quickly check the hyperlinks and access a - wealth of information.
- Internal cache is used by browsers and is saved so that the user can open the same webpage multiple times without losing any data.
- A web browser can open multiple web pages at the same time.
- Back, forward, reload, stop reload, home, and other options are available on these web browsers, making them simple and convenient to use.


**Components of a Web Browser**
<img src="/uploads/50c5e8fbef565cfcdcb031fc1fa872fe/BrowserComponents_.jpg" width="500" height="400">
1. The user interface: 
this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
2. The browser engine: 
marshals actions between the UI and the rendering engine.
3. The rendering engine: 
responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
4. Networking: 
for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
5. UI backend: 
used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
6. JavaScript interpreter:
 Used to parse and execute JavaScript code.
7. Data storage:
 This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.**

 **HTML Parcing**
<img src="/uploads/4fa14c82a442c364246de5b7326e722c/HTMLParcing.png" width="500" height="250">

 **CSS Parcing**
<img src="/uploads/c80e703f71122ecf2bc14bfd8cfbf753/CSSParcing.png" width="500" height="250">

 **Render Tree**
<img src="/uploads/054d4ea887d182f4f2b0fd3757a0fe6e/RenderTree.png" width="500" height="250">



# What happens when you click on a URL in your browser

At first we must go through what a URL actually is
* **URL** – Uniform Resource Locator:
It is an address of the place where we want to go to interact with or find information.
<img src="/uploads/ea3cf971916f7943494c78a2a01f3c9e/URL-structure.jpg" width="300" height="250">

* **DNS** - Domain Name Sysytem: A system that stores domain names with its corresponding IP address.  DNS is like a phone book and helps us to provide the IP address that is associated with the domain name 
<img src="/uploads/c04c1dad22e7f09a3f5afd92bd942b48/dns.png" width="300" height="250">

# Four layers through which this domain name query goes through

<img src="/uploads/1284bc653af71bfaf7e780da44a34042/dns_resolve.png" width="700" height="400">

1. **Browser cache**:  After hitting the URL, the browser cache is checked. As browser maintains its DNS records for some amount of time for the websites you have visited earlier. Hence, firstly, DNS query runs here to find the IP address associated with the domain name.

2. **OS cache**: The second place where DNS query runs in OS cache followed by router cache.

3. **ISP cache** : If in the above steps, a DNS query does not get resolved, then it takes the help of resolver server. Resolver server is nothing but your ISP (Internet service provider). The query is sent to ISP where DNS query runs in ISP cache.

4. **Authoritative Name server**: If in 3rd steps as well, no results found, then request sends to top or root server of the DNS hierarchy. There it never happens that it says no results found, but actually it tells, from where this information you can get. If you are searching IP address of the top level domain (.com,.net,.Gov,. org). It tells the resolver server to search TLD server (Top level domain).
Now, resolver asks TLD server to give IP address of our domain name. TLD stores address information of domain name. It tells the resolver to ask it to Authoritative Name server.
The authoritative name server is responsible for knowing everything about the domain name. Finally, resolver (ISP) gets the IP address associated with the domain name and sends it back to the browser.

After getting an IP address, resolver stores it in its cache so that next time, if the same query comes then it does not have to go to all these steps again. It can now provide IP address from their cache.
