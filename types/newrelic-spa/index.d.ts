// Definitions by: Vojtech Mašek <https://github.com/vmasek>

/**
 * https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api
 */
export interface NewRelicSPAClient {
    interaction(): NewRelicSPABrowserInteraction;
    actionText(value: string): NewRelicSPABrowserInteractionEvent;
    addPageAction(name: string, attributes: { [key: string]: string }): void;
    addRelease(releaseName: string, releaseId: string): void;
    addToTrace(customObject: NewRelicTraceCustomObject): void;
    finished(timeStamp: number): void;
    noticeError(error: Error, customAttributes: { [key: string]: string }): void;
    setCustomAttribute(name: string, value: string | number): void;
    setErrorHandler(callback: Function): void;
    setPageViewName(name: string, host?: string): void;
}

/**
 * https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api
 */
interface NewRelicSPABrowserInteraction {
    createTracer(name: string, callback: Function): Function;
    end(): NewRelicSPABrowserInteractionEvent;
    getContext(callback: Function): NewRelicSPABrowserInteractionEvent;
    ignore(): NewRelicSPABrowserInteractionEvent;
    interaction(...args: any[]): any;
    onEnd(callback: Function): NewRelicSPABrowserInteractionEvent;
    save(): NewRelicSPABrowserInteractionEvent;
    setAttribute(key: string, value: any): NewRelicSPABrowserInteractionEvent;
    setCurrentRouteName(name: string): void;
    setName(name: string, trigger?: string): NewRelicSPABrowserInteractionEvent;
}

/**
 * https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/addtotrace-browser-agent-api
 */
interface NewRelicTraceCustomObject {
    name: string;
    start: number;
    end?: number;
    origin?: number;
    type?: string;
}

/**
 * https://docs.newrelic.com/attribute-dictionary?attribute_name=&events_tids%5B%5D=8312
 */
interface NewRelicSPABrowserInteractionEvent {
    // The text of the HTML element that was clicked when a browser interaction started.
    actionText: string;

    // A count of all XHRs included in the timing of a SPA interaction.
    ajaxCount: number;

    // The ID of your application, as recorded by New Relic.
    appId: string;

    // The name of the application that handled the request as shown in New Relic Browser.
    appName: string;

    // Autonomous System Number: a unique number identifying a group of IP networks that serves the content to the end-user.
    asn: number;

    // The latitude of the geographic center of the postal code where the Autonomous System Network is registered. This is not the end user's latitude.
    asnLatitude: string;

    // The longitude of the geographic center of the postal code where the Autonomous System Network is registered. This is not the end user's longitude.
    asnLongitude: string;

    // The organization that owns the Autonomous System Number. Often an ISP, sometimes a private company or institution.
    asnOrganization: string;

    // The name of the backend transaction that served the initial page load.
    backendTransactionName: string;

    // An unique value generated for each Browser interaction captured by the New Relic agent.
    browserInteractionId: string;

    // The name of the interaction. This is either the targetGroupedURL or the custom name set via the API.
    browserInteractionName: string;

    // The type of interaction; either initial page load, route change, or custom.
    category: string;

    // The city in which the PageView event occurred, such as Portland or Seattle.
    city: string;

    // The country from which the browser initiated the page load. For a list of country codes, see ISO 3166-1 alpha-2.
    countryCode: string;

    // The type of device that loaded the page: either mobile, tablet, or desktop.
    deviceType: string;

    // The domain portion of the request URL.
    domain: string;

    // The total duration, in seconds, of the interaction event
    duration: number;

    // A value that you can link to multiple BrowserInteraction events so you can view the interactions that occurred surrounding a specific event. For example, you can see the browser interactions that occurred prior to a JS error.
    eventId: string;

    // The total duration, in seconds, spent on JavaScript execution. (This attribute doesn't exist for initial page load events.)
    jsDuration: number;

    // The Synthetics account from which you are running the monitor.
    monitorAccountId: string;

    // A unique number identifying a particular monitor.
    monitorId: number;

    // The ID of a single Synthetics monitor run, which began at a specific time and originated from a specific location.
    monitorJobId: string;

    // A unique value generated for each interaction with the page. You can use this value to group interactions together.
    parentEventId: string;

    // The grouped version of the URL in the browser at the start of the interaction.
    previousGroupedUrl: string;

    // The route name of the page at the start of the interaction. This is the last value passed by setCurrentRouteName before the start of the interaction.
    previousRouteName: string;

    // The ungrouped URL in the browser at the start of the interaction.
    previousURL: string;

    // The specific administrative division within a country where the PageView event occurred. In the United States, regions correspond to state codes, such as WA or NY. Outside the United States, a country's regions correspond to numerical codes.
    regionCode: string;

    // A unique identifier for a single session. Sessions expire when the user closes the browser. A new identifier will be assigned when the user opens up a new browser window.
    session: string;

    // The grouped version of the URL in the browser at the end of the interaction.
    targetGroupedUrl: string;

    // The route name for the page at the end of the interaction. The last value passed by setCurrentRouteName before the end of the interaction.
    targetRouteName: string;

    // The ungrouped URL in the browser at the end of the interaction.
    targetUrl: string;

    // The time (date, hour, minute, second) at which the interaction occurred.
    timestamp: string;

    // The time, in seconds, from the start of the interaction to the connectEnd, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToConnectEnd: number;

    // The time, in seconds, from the start of the interaction to the connectStart, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToConnectStart: number;

    // The time, in seconds, from the start of the interaction to the domainLookupEnd, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToDomainLookupEnd: number;

    // The time, in seconds, from the start of the interaction to the domainLookupStart, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToDomainLookupStart: number;

    // The time, in seconds, from the start of the interaction to the domComplete, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToDomComplete: number;

    // The time, in seconds, from the start of the interaction to the domContentLoadedEventEnd, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToDomContentLoadedEventEnd: number;

    // The time, in seconds, from the start of the interaction to the domContentLoadedEventStart, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToDomContentLoadedEventStart: number;

    // The time, in seconds, from the start of the interaction to the domInteractive, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToDomInteractive: number;

    // The time, in seconds, from the start of the interaction to the domLoading, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToDomLoading: number;

    // The time, in seconds, from the start of the interaction to the fetchStart, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToFetchStart: number;

    // The time, in seconds, from the start of the interaction to the loadEventEnd, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToLoadEventEnd: number;

    // The time, in seconds, from the start of the interaction to the loadEventStart, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToLoadEventStart: number;

    // The time, in seconds, from the start of the interaction to the redirectEnd, as defined by the Navigation Timing API. This attribute exists only for initial page load events, not route changes.
    timeToRedirectEnd: number;

    // The time, in seconds, from the start of the interaction to the redirectStart, as defined by the Navigation Timing API. This attribute exists only for initial page load events, not route changes.
    timeToRedirectStart: number;

    // The time, in seconds, from the start of the interaction to the requestStart, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToRequestStart: number;

    // The time, in seconds, from the start of the interaction to the responseEnd, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToResponseEnd: number;

    // The time, in seconds, from the start of the interaction to the responseStart, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToResponseStart: number;

    // The time, in seconds, from the start of the interaction to the secureConnectionStart, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToSecureConnectionStart: number;

    // The time, in seconds, from the start of the interaction to the unloadEventEnd, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToUnloadEventEnd: number;

    // The time, in seconds, from the start of the interaction to the unloadEventStart, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.
    timeToUnloadEventStart: number;

    // The cause of the route change or page load. The default values are click, submit, popstate, or initial page load. For a custom event created with the API, the default value for trigger will be api. This value can also be set via the API.
    trigger: string;

    // Tracking information about the browser initiating the page load.
    userAgentName: string;

    // Tracking information about the browser initiating the page load.
    userAgentOS: string;

    // Tracking information about the browser initiating the page load.
    userAgentVersion: string;
}
