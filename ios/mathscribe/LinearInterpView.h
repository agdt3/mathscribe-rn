//
//  LinearInerpView.h
//  mathscribe
//
//  Created by Pavel A on 2017-04-02.
//  Copyright © 2017 Facebook. All rights reserved.
//
/*
#ifndef LinearInerpView_h
#define LinearInerpView_h
*/

//#endif /* LinearInerpView_h */

#import <UIKit/UIKit.h>
#import <React/RCTComponent.h>

@interface LinearInterpView : UIView

@property (nonatomic, copy) RCTBubblingEventBlock onChange;
@property (nonatomic, strong) UIColor *lineColor;
@property (nonatomic) float lineWidth;

- (void) loadPaths:(NSArray*) paths;

@end
