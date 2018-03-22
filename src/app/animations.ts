import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
    trigger('slideInAnimation', [
        state('*',
            style({
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 1,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(100%)'
            }),
            animate('0.3s')
        ]),
        transition(':leave', [
            animate('0.8s', style({
                opacity: 0,
                transform: 'translateY(200%)'
            }))
        ])
    ]);

// Animations for page-stats nundah
export const pageStatsAnimation: AnimationEntryMetadata =
    trigger('pageStatsAnimation', [
        state('*',
            style({
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 1,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(100%)'
            }),
            animate('0.8s')
        ]),
        transition(':leave', [
            animate('0.8s', style({
                opacity: 1,
                transform: 'translateX(-100%)'
            }))
        ])
    ]);

// Component transition animations
export const slideInRightAnimation: AnimationEntryMetadata =
    trigger('slideInRightAnimation', [
        state('*',
            style({
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 1,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 1,
                transform: 'translateX(100%)'
            }),
            animate('0.8s')
        ]),
        transition(':leave', [
            animate('0.8s', style({
                opacity: 1,
                transform: 'translateX(-100%)'
            }))
        ])
    ]);

export const fadeOutAnimation: AnimationEntryMetadata =
    trigger('fadeOutAnimation', [
        state('*',
            style({
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 1
            })
        ),
        // route 'enter' transition
        transition(':leave', [
            // styles at start of transition
            style({
                opacity: 1
            }),
            // animation and styles at end of transition
            animate('.3s', style({
                opacity: 0
            }))
        ]),
    ]);

export const fadeAnimation: AnimationEntryMetadata =
    trigger('fadeAnimation', [
        state('*',
            style({
                position: 'relative',
                top: 0,
                right: 0,
                bottom: 0,
                opacity: 1
            })
        ),
        transition(':enter', [
            // styles at start of transition
            style({
                opacity: 0,
                transform: 'translateY(5%)'
            }),
            // animation and styles at end of transition
            animate('650ms ease-in-out', style({
                opacity: 1,
                transform: 'translateY(0%)'
            }))
        ]),
        transition(':leave', [
            // styles at start of transition
            style({
                opacity: 1
            }),
            // animation and styles at end of transition
            animate('650ms ease-in-out', style({
                opacity: 0
            }))
        ]),
    ]);


