/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface ErrorInfoFields {
  uniqueId: string;
  category: string;
  grade: string;
  message: any;
  errorUrl: string;
  line?: number;
  col?: number;
  stack?: string;
  firstReportedError?: boolean;
}

export interface ReportFields {
  service: string;
  serviceVersion: string;
  pagePath: string;
}
export interface LargestContentfulPaint extends PerformanceEntry {
  readonly renderTime: DOMHighResTimeStamp;
  readonly loadTime: DOMHighResTimeStamp;
  readonly size: number;
  readonly id: string;
  readonly url: string;
  readonly element: Element | null;
}

interface LayoutShiftAttribution {
  node?: Node;
  previousRect: DOMRectReadOnly;
  currentRect: DOMRectReadOnly;
}
export interface LayoutShift extends PerformanceEntry {
  value: number;
  sources: LayoutShiftAttribution[];
  hadRecentInput: boolean;
}
export interface PerformanceEventTiming extends PerformanceEntry {
  duration: DOMHighResTimeStamp;
  interactionId: number;
}
export interface Interaction {
  id: number;
  latency: number;
  entries: PerformanceEventTiming[];
}
export interface EntryPreProcessingHook {
  (entry: PerformanceEventTiming): void;
}
export interface PerformanceObserverInit {
  durationThreshold?: number;
}