'use client';

import React from 'react';
import { Card } from './ui/Card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { AnimationWrapper } from './AnimationWrapper';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimationWrapper direction="up" delay={0.1}>
          <div className="text-left max-w-3xl mb-16">
            <span className="px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-widest bg-orange-100 text-orange-800 border border-orange-200 inline-block mb-3">
              Education
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
              Academic Background
            </h2>
          </div>
        </AnimationWrapper>

        {/* Degree Credentials Card */}
        <AnimationWrapper direction="up" delay={0.2}>
          <Card hoverEffect={true} className="bg-white border-slate-200 p-8 max-w-3xl shadow-md border-t-4 border-t-orange-500">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 text-left">
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-orange-50 text-orange-600 border border-orange-200 shrink-0">
                  <GraduationCap className="h-6 w-6" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-sm font-bold text-blue-600">
                    University of Agriculture Faisalabad (UAF)
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1 max-w-xl">
                    Focusing on core computer science foundations, algorithm complexity, software architecture, machine learning principles, database management systems, and object-oriented programming.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-2 text-xs font-medium shrink-0 pt-1 border-t sm:border-t-0 sm:border-l border-slate-100 sm:pl-6">
                <div className="flex items-center space-x-2 text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span>2024 – 2028</span>
                </div>
                <div className="flex items-center space-x-2 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <MapPin className="h-4 w-4 text-emerald-600" />
                  <span>Faisalabad, PK</span>
                </div>
              </div>

            </div>
          </Card>
        </AnimationWrapper>

      </div>
    </section>
  );
};
