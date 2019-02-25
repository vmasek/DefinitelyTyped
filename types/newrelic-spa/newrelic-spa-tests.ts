/// <reference types="node" />
import { NewRelicSPAClient, NewRelicSPABrowserInteraction, NewRelicSPABrowserInteractionEvent } from 'newrelic-spa';

let newRelicSPAClient: NewRelicSPAClient;

let newRelicSPABrowserInteraction: NewRelicSPABrowserInteraction =
newRelicSPAClient.interaction(); // $ExpectType NewRelicSPABrowserInteraction
newRelicSPAClient.actionText('foo'); // $ExpectType NewRelicSPABrowserInteractionEvent
newRelicSPAClient.addPageAction('foo', {bar: 'wololo'}); // $ExpectType void
newRelicSPAClient.addRelease('foo', '1.0.0'); // $ExpectType void
newRelicSPAClient.addToTrace({name: 'wololo', start: 0}); // $ExpectType void
newRelicSPAClient.addToTrace({name: 'wololo', start: 0, type: 'Type', end: 1337, origin: 42}); // $ExpectType void
newRelicSPAClient.finished(new Date().getTime() * 1000); // $ExpectType void
newRelicSPAClient.noticeError({message: 'It\'s broken.', name: 'Fatal error'}); // $ExpectType void
newRelicSPAClient.setCustomAttribute('foo', 'wololo'); // $ExpectType void
newRelicSPAClient.setCustomAttribute('bar', 42); // $ExpectType void
newRelicSPAClient.setErrorHandler(() => {}); // $ExpectType void
newRelicSPAClient.setPageViewName('login', '/login'); // $ExpectType void

newRelicSPABrowserInteraction.createTracer('foo', () => {}); // $ExpectType Function
newRelicSPABrowserInteraction.end(); // $ExpectType NewRelicSPABrowserInteractionEvent
newRelicSPABrowserInteraction.getContext(() => {}); // $ExpectType NewRelicSPABrowserInteractionEvent
newRelicSPABrowserInteraction.ignore(); // $ExpectType NewRelicSPABrowserInteractionEvent
newRelicSPABrowserInteraction.interaction(); // $ExpectType NewRelicSPABrowserInteractionEvent
newRelicSPABrowserInteraction.onEnd(() => {}); // $ExpectType NewRelicSPABrowserInteractionEvent
newRelicSPABrowserInteraction.save(); // $ExpectType NewRelicSPABrowserInteractionEvent
newRelicSPABrowserInteraction.setAttribute('foo', 'bar'); // $ExpectType NewRelicSPABrowserInteractionEvent
newRelicSPABrowserInteraction.setAttribute('foo', 42); // $ExpectType NewRelicSPABrowserInteractionEvent
newRelicSPABrowserInteraction.setAttribute('foo', {bar: 42}); // $ExpectType NewRelicSPABrowserInteractionEvent
newRelicSPABrowserInteraction.setCurrentRouteName('login'); // $ExpectType void
newRelicSPABrowserInteraction.setName('login', 'myTrigger'); // $ExpectType NewRelicSPABrowserInteractionEvent

let newRelicSPABrowserInteractionEvent: NewRelicSPABrowserInteractionEvent;

newRelicSPABrowserInteractionEvent.actionText; // $ExpectType string
newRelicSPABrowserInteractionEvent.ajaxCount; // $ExpectType number
newRelicSPABrowserInteractionEvent.appId; // $ExpectType string
newRelicSPABrowserInteractionEvent.appName; // $ExpectType string
newRelicSPABrowserInteractionEvent.asn; // $ExpectType number
newRelicSPABrowserInteractionEvent.asnLatitude; // $ExpectType string
newRelicSPABrowserInteractionEvent.asnLongitude; // $ExpectType string
newRelicSPABrowserInteractionEvent.asnOrganization; // $ExpectType string
newRelicSPABrowserInteractionEvent.backendTransactionName; // $ExpectType string
newRelicSPABrowserInteractionEvent.browserInteractionId; // $ExpectType string
newRelicSPABrowserInteractionEvent.browserInteractionName; // $ExpectType string
newRelicSPABrowserInteractionEvent.category; // $ExpectType string
newRelicSPABrowserInteractionEvent.city; // $ExpectType string
newRelicSPABrowserInteractionEvent.countryCode; // $ExpectType string
newRelicSPABrowserInteractionEvent.deviceType; // $ExpectType string
newRelicSPABrowserInteractionEvent.domain; // $ExpectType string
newRelicSPABrowserInteractionEvent.duration; // $ExpectType number
newRelicSPABrowserInteractionEvent.eventId; // $ExpectType string
newRelicSPABrowserInteractionEvent.jsDuration; // $ExpectType number
newRelicSPABrowserInteractionEvent.monitorAccountId; // $ExpectType string
newRelicSPABrowserInteractionEvent.monitorId; // $ExpectType number
newRelicSPABrowserInteractionEvent.monitorJobId; // $ExpectType string
newRelicSPABrowserInteractionEvent.parentEventId; // $ExpectType string
newRelicSPABrowserInteractionEvent.previousGroupedUrl; // $ExpectType string
newRelicSPABrowserInteractionEvent.previousRouteName; // $ExpectType string
newRelicSPABrowserInteractionEvent.previousURL; // $ExpectType string
newRelicSPABrowserInteractionEvent.regionCode; // $ExpectType string
newRelicSPABrowserInteractionEvent.session; // $ExpectType string
newRelicSPABrowserInteractionEvent.targetGroupedUrl; // $ExpectType string
newRelicSPABrowserInteractionEvent.targetRouteName; // $ExpectType string
newRelicSPABrowserInteractionEvent.targetUrl; // $ExpectType string
newRelicSPABrowserInteractionEvent.timestamp; // $ExpectType string
newRelicSPABrowserInteractionEvent.timeToConnectEnd; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToConnectStart; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToDomainLookupEnd; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToDomainLookupStart; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToDomComplete; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToDomContentLoadedEventEnd; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToDomContentLoadedEventStart; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToDomInteractive; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToDomLoading; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToFetchStart; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToLoadEventEnd; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToLoadEventStart; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToRedirectEnd; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToRedirectStart; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToRequestStart; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToResponseEnd; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToResponseStart; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToSecureConnectionStart; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToUnloadEventEnd; // $ExpectType number
newRelicSPABrowserInteractionEvent.timeToUnloadEventStart; // $ExpectType number
newRelicSPABrowserInteractionEvent.trigger; // $ExpectType string
newRelicSPABrowserInteractionEvent.userAgentName; // $ExpectType string
newRelicSPABrowserInteractionEvent.userAgentOS; // $ExpectType string
newRelicSPABrowserInteractionEvent.userAgentVersion; // $ExpectType string
