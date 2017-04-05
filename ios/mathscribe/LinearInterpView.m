//
//  LinearInterpView.m
//  mathscribe
//
//  Created by Pavel A on 2017-04-02.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "LinearInterpView.h"

@implementation LinearInterpView
{
  UIBezierPath *path;
}

- (id)initWithFrame:(CGRect)frame
{
  NSLog(@"%@", @"initWithFrame");
  if (self = [super initWithFrame:frame]) {
    [self setMultipleTouchEnabled:NO];
    [self setBackgroundColor:[UIColor greenColor]];
    path = [UIBezierPath bezierPath];
    [path setLineWidth:2.0];
  }
  return self;
}

- (void)drawRect:(CGRect)rect
{
  [[UIColor blackColor] setStroke];
  [path stroke];
}

- (void)touchesBegan:(NSSet *)touches withEvent:(UIEvent *)event
{
  NSLog(@"touchesBegan");
  UITouch *touch = [touches anyObject];
  CGPoint p = [touch locationInView:self];
  [path moveToPoint:p];
  self.onChange(@{
                  @"state": @"touchesBegan",
                  @"point": @{
                        @"x":@(p.x),
                        @"y":@(p.y)
                      }
                  });
}

- (void)touchesMoved:(NSSet *)touches withEvent:(UIEvent *)event
{
  NSLog(@"touchesMoved");
  UITouch *touch = [touches anyObject];
  CGPoint p = [touch locationInView:self];
  [path addLineToPoint:p];
  self.onChange(@{
                  @"state": @"touchesMoved",
                  @"point": @{
                      @"x": @(p.x),
                      @"y": @(p.y)
                      }});
 
  [self setNeedsDisplay];
}

- (void)touchesEnded:(NSSet *)touches withEvent:(UIEvent *)event
{
  NSLog(@"touchesEnded");
  UITouch *touch = [touches anyObject];
  CGPoint p = [touch locationInView:self];
  [path addLineToPoint:p];
  self.onChange(@{
                  @"state": @"touchesEnded",
                  @"point": @{
                      @"x": @(p.x),
                      @"y": @(p.y)
                      }});
  
  [self setNeedsDisplay];
  //[self touchesMoved:touches withEvent:event];
  
  
}

- (void)touchesCancelled:(NSSet *)touches withEvent:(UIEvent *)event
{
  [self touchesEnded:touches withEvent:event];
}

- (void)loadPaths:(NSArray*)paths {
  BOOL isNewPath;
  NSUInteger length;
  for (id subpath in paths) {
    isNewPath = YES;
    if ([subpath isKindOfClass:[NSArray class]]) {
      length = [subpath count];
      if (length % 2 != 0) {
        continue;
      }
    } else {
      return;
    }
    NSLog(@"%s %lu", "subpath length", length);
    NSUInteger i;
    for (i = 0; i < length; i+=2) {
      CGFloat x = [[subpath objectAtIndex:i] floatValue];
      CGFloat y = [[subpath objectAtIndex:i+1] floatValue];
      CGPoint point = CGPointMake(x, y);
      if (isNewPath) {
        [path moveToPoint:point];
        isNewPath = NO;
      } else {
        [path addLineToPoint:point];
      }
    }
  }
  [self setNeedsDisplay];
}

@end
