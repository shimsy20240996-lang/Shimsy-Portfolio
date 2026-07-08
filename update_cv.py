import sys

with open('e:/portfolio_app/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add nav link
nav_target = '<li><a href="#education">Education</a></li>'
if nav_target in content:
    nav_replacement = nav_target + '\n            <li><a href="#cv">CV</a></li>'
    content = content.replace(nav_target, nav_replacement)
else:
    print("nav_target not found")

# 2. Add footer link
footer_target = '<a href="#projects">Projects</a>'
if footer_target in content:
    footer_replacement = footer_target + '\n                <a href="#cv">CV</a>'
    content = content.replace(footer_target, footer_replacement)
else:
    print("footer_target not found")

# 3. Add CV section
section_target = '<!-- Contact Section -->'
if section_target in content:
    cv_section = """
    <!-- CV Section -->
    <section id="cv">
        <h2 class="section-title reveal">My <span>Resume</span></h2>
        <div class="cv-container reveal glass-card" data-tilt data-tilt-max="5" data-tilt-glare data-tilt-max-glare="0.2" style="max-width: 800px; margin: 0 auto; padding: 50px; text-align: center;">
            <i class="fas fa-file-pdf" style="font-size: 4rem; color: var(--primary); margin-bottom: 20px; filter: drop-shadow(0 0 10px rgba(16,185,129,0.5)); transform: translateZ(30px);"></i>
            <h3 style="font-size: 1.8rem; margin-bottom: 15px; transform: translateZ(20px);">Download My Curriculum Vitae</h3>
            <p style="color: var(--text-muted); margin-bottom: 30px; font-size: 1.1rem; transform: translateZ(10px);">Get a detailed overview of my education, technical skills, projects, and professional experience.</p>
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; transform: translateZ(20px);">
                <a href="./cv.pdf" target="_blank" class="btn btn-primary">
                    <i class="fas fa-eye"></i> View CV
                </a>
                <a href="./cv.pdf" download class="btn btn-outline">
                    <i class="fas fa-download"></i> Download CV
                </a>
            </div>
        </div>
    </section>

"""
    content = content.replace(section_target, cv_section + section_target)
else:
    print("section_target not found")

with open('e:/portfolio_app/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('CV Section added successfully.')
