import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

// Component transition animations
export const slideInDownAnimation =
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

export const fadeAnimation =
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

export const menuStaggerAnimation =
    trigger('menuStaggerAnimation', [
        transition(':enter', [
            query('nav', style({
                transform: 'translateX(10%)',
                opacity: 0
            })),
            query('nav',
                stagger('50ms', [
                    animate('300ms', style({
                        transform: 'translateX(0)',
                        opacity: 1
                    }))
                ]))
        ]),
        transition(':leave', [
            query('nav', style({
                transform: 'translateX(0%)',
                opacity: 1
            })),
            query('nav',
                stagger('50ms', [
                    animate('300ms', style({
                        transform: 'translateX(10%)',
                        opacity: 0
                    }))
                ]))
        ])
    ]);


