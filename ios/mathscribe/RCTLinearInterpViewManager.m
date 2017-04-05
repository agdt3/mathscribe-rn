//
//  RCTLinearInterpViewManager.m
//  mathscribe
//
//  Created by Pavel A on 2017-04-02.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/NSJSONSerialization.h>
#import <React/RCTViewManager.h>
#import <React/RCTComponent.h>
#import "LinearInterpView.h"

@interface RCTLinearInterpViewManager : RCTViewManager <LinearInterpViewProtocol>
@property (atomic, strong) LinearInterpView* _view;
@end

@implementation RCTLinearInterpViewManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(backgroundColor, UIColor);
RCT_EXPORT_VIEW_PROPERTY(opaque, BOOL);
RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock);

- (UIView *)view {
  if (!self._view) {
    //NSLog(@"%s", "no view");
    LinearInterpView *drawView = [[LinearInterpView alloc] init];
    self._view = drawView;
  }
  //NSLog(@"%s", "have a view");
  return self._view;
}

RCT_CUSTOM_VIEW_PROPERTY(loadedPaths, NSArray, LinearInterpView)
{
  // json is already an NSArray*
  if ([json count] != 0) {
    [view loadPaths:json];
  }
}

@end
