import React from 'react'

function Footer() {
  return (
    <div>
         <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 shadow-md">
            
            <div class="text-center md:text-left">
                <h2 class="text-3xl font-bold">Alvinjr101</h2>
                <p class="text-sky-700 mt-2">check out our recipes</p>
            </div>
    
           
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                <nav>
                    <ul class="space-y-2">
                        <li class="font-semibold">Home</li>
                        <li><a href="#" class="hover:text-sky-700">About Us</a></li>
                        <li><a href="#" class="hover:text-sky-700">Portfolio</a></li>
                        <li><a href="#" class="hover:text-sky-700">Services</a></li>
                        <li><a href="#" class="hover:text-sky-700">Contact</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul class="space-y-2">
                        <li class="font-semibold">Clients</li>
                        <li><a href="#" class="hover:text-sky-700">Team</a></li>
                        <li><a href="#" class="hover:text-sky-700">Career</a></li>
                        <li><a href="#" class="hover:text-sky-700">Testimonials</a></li>
                        <li><a href="#" class="hover:text-sky-700">Journal</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul class="space-y-2">
                        <li class="font-semibold">Privacy Policy</li>
                        <li><a href="#" class="hover:text-sky-700">Terms & Conditions</a></li>
                        <li><a href="#" class="hover:text-sky-700">Partners</a></li>
                    </ul>
                </nav>
            </div>
    
           
            <div class="mt-8 flex flex-wrap justify-center md:justify-start space-x-4">
                <a href="https://facebook.com" aria-label="Facebook" class="text-sky-700 hover:text-blue-500 text-2xl">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="https://x.com" aria-label="Twitter" class="text-sky-400 hover:text-blue-400 text-2xl">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com" aria-label="LinkedIn" class="text-sky-700 hover:text-blue-600 text-2xl">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com" aria-label="Instagram" class="text-sky-700 hover:text-blue-900 text-2xl">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.tiktok.com" aria-label="TikTok" class="text-sky-400 hover:text-black text-2xl">
                    <i class="fab fa-tiktok"></i>
                </a>
            </div>
    
            
            <div class="mt-6 text-center md:text-left">
                <a href="contact2.html" class="inline-block bg-sky-500 hover:bg-sky-800 text-white font-semibold py-2 px-6 rounded-lg transition">
                    Contact Us
                </a>
            </div>
    
           
            <div class="mt-10 text-center text-gray-600 text-sm">
                <p>&copy; 2025 master101. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer