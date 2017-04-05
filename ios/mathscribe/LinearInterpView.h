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
#import "LinearInterpViewProtocol.h"

@interface LinearInterpView : UIView

@property (nonatomic, weak) id <LinearInterpViewProtocol> delegate;
@property (nonatomic, copy) RCTBubblingEventBlock onChange;

- (void) loadPaths:(NSArray*) paths;

@end
