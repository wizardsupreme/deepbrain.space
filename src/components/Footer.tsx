const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DeepBrain.Space</h3>
            <p className="text-gray-400">
              Revolutionizing business communication with AI Voice Agents
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#demo" className="text-gray-400 hover:text-white">Try Demo</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://twitter.com/deepbrain" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="https://linkedin.com/company/deepbrain" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              <li><a href="https://github.com/deepbrain" className="text-gray-400 hover:text-white">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@deepbrain.space</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DeepBrain.Space. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 