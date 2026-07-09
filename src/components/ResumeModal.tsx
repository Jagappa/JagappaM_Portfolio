import { X, Download, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  resumeUrl: string;
  onClose: () => void;
}

const ResumeModal = ({ resumeUrl, onClose }: ResumeModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-portfolio-dark border border-white/10 rounded-md w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
          <span className="text-xs uppercase tracking-wider text-gray-400 flex items-center gap-2">
            <span className="status-dot" /> Resume_Preview
          </span>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white text-xl leading-none"
            aria-label="Close preview"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 min-h-[50vh] bg-white">
          <iframe src={resumeUrl} title="Resume preview" className="w-full h-full min-h-[50vh]" />
        </div>

        <div className="flex flex-wrap justify-end gap-3 px-5 py-3 border-t border-white/10">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <ExternalLink size={14} /> OPEN_IN_NEW_TAB
          </a>
          <a href={resumeUrl} download className="btn-primary">
            <Download size={14} /> DOWNLOAD &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
