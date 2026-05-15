export default function Home() {
	return (
		<div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
			<div className="max-w-xl w-full text-center space-y-6">
				
				{/* Title */}
				<h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
					Coming Soon
				</h1>

				{/* Divider */}
				<div className="flex justify-center">
					<div className="w-16 h-px bg-white/20" />
				</div>

				{/* Message */}
				<p className="text-base md:text-lg text-white/70 leading-relaxed">
					Safety point is currently under development.  
					We are working to bring a secure and reliable experience.
				</p>

				{/* Footer line */}
				<p className="text-sm text-white/50">
					Made by Haven Support Group
				</p>
			</div>
		</div>
	);
}
