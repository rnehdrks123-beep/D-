/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertTriangle, X } from 'lucide-react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  isOpen: boolean;
  onClose: () => void;
}

export default function Notification({ message, type, isOpen, onClose }: NotificationProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="toast-notification-banner"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/95 p-4 shadow-xl backdrop-blur-md md:max-w-md"
        >
          {type === 'success' ? (
            <CheckCircle2 id="toast-icon-success" className="h-5 w-5 text-amber-400 shrink-0" />
          ) : (
            <AlertTriangle id="toast-icon-error" className="h-5 w-5 text-red-500 shrink-0" />
          )}
          <span id="toast-message" className="text-sm font-medium text-slate-100">
            {message}
          </span>
          <button
            id="toast-close-btn"
            onClick={onClose}
            className="ml-auto rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
