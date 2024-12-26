function StatusFeedbackWrapper({ children }) {
  return (
    <div className="absolute left-[50%] top-[45%] block translate-x-[-50%] translate-y-[-50%] transform bg-black text-center text-white">
      {children}
    </div>
  );
}

export default StatusFeedbackWrapper;
