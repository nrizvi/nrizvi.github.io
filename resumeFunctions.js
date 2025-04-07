function createElement(tag, html = "") {
    const el = document.createElement(tag);
    if (html) el.innerHTML = html;  
    return el;
  }
  
  // Helper function to create a <ul> with no bullets or spacing
  function createUlNoBullets() {
    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    ul.style.margin = '0';
    ul.style.padding = '0';
    return ul;
  }
  
  /**
   * Updated renderSection to accept a custom ID (sectionId).
   */
  function renderSection(container, title, sectionId) {
    const sectionDiv = document.createElement('div');
    sectionDiv.id = sectionId;              // <-- Assign an id to each section
    const h2 = createElement('h2', title);
    sectionDiv.appendChild(h2);
    container.appendChild(sectionDiv);
    return sectionDiv;
  }
  
  // RENDER NAME & SUMMARY
  function renderHeader(data, container) {
    const h1 = createElement('h1', data.name);
    container.appendChild(h1);
  
    if (data.summary) {
      const summaryP = createElement('p', data.summary);
      container.appendChild(summaryP);
    }
  }
  
  /**
   * EMPLOYMENT
   * We'll now call renderSection with an ID like "employment"
   */
  function renderEmployment(data, container) {
    const sec = renderSection(container, "Employment", "employment");
    data.forEach(job => {
      const div = createElement('div');
      const h5 = createElement('h5', `${job.position} (${job.years})`);
      div.appendChild(h5);
      sec.appendChild(div);
    });
  }
  
  /**
   * EDUCATION
   */
  function renderEducation(data, container) {
    const sec = renderSection(container, "Education", "education");
    data.forEach(ed => {
      const div = createElement('div');
      const h5 = createElement('h5', `${ed.degree} (${ed.years})`);
      div.appendChild(h5);
  
      if (ed.notes) {
        const p = createElement('p', ed.notes);
        div.appendChild(p);
      }
      sec.appendChild(div);
    });
  }
  
  /**
   * AWARDS & DISTINCTIONS
   */
  function renderAwards(data, container) {
    const sec = renderSection(container, "Awards & Distinctions", "awards");
    data.forEach(group => {
      const div = createElement('div');
      const h5 = createElement('h5', group.year.toString());
      div.appendChild(h5);
  
      const ul = createUlNoBullets();
      group.items.forEach(item => {
        const li = createElement('li', item);
        ul.appendChild(li);
      });
      div.appendChild(ul);
  
      sec.appendChild(div);
    });
  }
  
  /**
   * PUBLICATIONS
   */
  function renderPublications(data, container) {
    const sec = renderSection(container, "Publications", "publications");
  
    // Helper function to render a publication section with numbering and bolding
    function renderPubSubsection(title, pubs) {
      const div = createElement('div');
      const h5 = createElement('h5', title);
      div.appendChild(h5);
    
      const ol = document.createElement('ol');
      ol.className = 'publication-list'; // Apply our new styles
    
      pubs.forEach((pub) => {
        const formatted = pub.replaceAll("N. Rizvi", "<b>N. Rizvi</b>");
        const li = createElement('li', formatted);
        ol.appendChild(li);
      });
    
      div.appendChild(ol);
      sec.appendChild(div);
    }
    
  
    if (data.under_review && data.under_review.length) {
      renderPubSubsection("Under Review", data.under_review);
    }
  
    if (data.conference_proceedings && data.conference_proceedings.length) {
      renderPubSubsection("Conference Proceedings", data.conference_proceedings);
    }
  
    if (data.workshops_organized && data.workshops_organized.length) {
      renderPubSubsection("Workshops Organized", data.workshops_organized);
    }
  
    if (data.workshop_proceedings_panels && data.workshop_proceedings_panels.length) {
      renderPubSubsection("Workshop Proceedings & Panels", data.workshop_proceedings_panels);
    }
  }
  
  // function renderPublications(data, container) {
  //   const sec = renderSection(container, "Publications", "publications");
  
  //   // Under Review
  //   if (data.under_review && data.under_review.length) {
  //     const uvDiv = createElement('div');
  //     const uvTitle = createElement('h5', "Under Review");
  //     uvDiv.appendChild(uvTitle);
  
  //     const ul = createUlNoBullets();
  //     data.under_review.forEach(pub => {
  //       const li = createElement('li', pub);
  //       ul.appendChild(li);
  //     });
  //     uvDiv.appendChild(ul);
  //     sec.appendChild(uvDiv);
  //   }
  
  //   // Conference Proceedings
  //   if (data.conference_proceedings && data.conference_proceedings.length) {
  //     const cpDiv = createElement('div');
  //     const cpTitle = createElement('h5', "Conference Proceedings");
  //     cpDiv.appendChild(cpTitle);
  
  //     const ul = createUlNoBullets();
  //     data.conference_proceedings.forEach(pub => {
  //       const li = createElement('li', pub);
  //       ul.appendChild(li);
  //     });
  //     cpDiv.appendChild(ul);
  //     sec.appendChild(cpDiv);
  //   }
  
  //   // Workshops Organized
  //   if (data.workshops_organized && data.workshops_organized.length) {
  //     const woDiv = createElement('div');
  //     const woTitle = createElement('h5', "Workshops Organized");
  //     woDiv.appendChild(woTitle);
  
  //     const ul = createUlNoBullets();
  //     data.workshops_organized.forEach(pub => {
  //       const li = createElement('li', pub);
  //       ul.appendChild(li);
  //     });
  //     woDiv.appendChild(ul);
  //     sec.appendChild(woDiv);
  //   }
  
  //   // Workshop Proceedings & Panels
  //   if (data.workshop_proceedings_panels && data.workshop_proceedings_panels.length) {
  //     const wppDiv = createElement('div');
  //     const wppTitle = createElement('h5', "Workshop Proceedings & Panels");
  //     wppDiv.appendChild(wppTitle);
  
  //     const ul = createUlNoBullets();
  //     data.workshop_proceedings_panels.forEach(pub => {
  //       const li = createElement('li', pub);
  //       ul.appendChild(li);
  //     });
  //     wppDiv.appendChild(ul);
  //     sec.appendChild(wppDiv);
  //   }
  // }
  
  /**
   * TEACHING
   */
  function renderTeaching(data, container) {
    const sec = renderSection(container, "Teaching & Guest Lectures", "teaching");
    data.forEach(item => {
      const div = createElement('div');
      const label = item.year ? item.year.toString() : (item.years || "");
      const h5 = createElement('h5', label);
      div.appendChild(h5);
  
      const ul = createUlNoBullets();
      item.entries.forEach(entry => {
        const li = createElement('li', entry);
        ul.appendChild(li);
      });
      div.appendChild(ul);
  
      sec.appendChild(div);
    });
  }
  
  /**
   * OUTREACH
   */
  function renderOutreach(data, container) {
    const sec = renderSection(container, "Outreach", "outreach");
  
    // Media Interviews
    if (data.media_interviews && data.media_interviews.length) {
      const miDiv = createElement('div');
      const miTitle = createElement('h4', "Media Interviews");
      miDiv.appendChild(miTitle);
  
      data.media_interviews.forEach(group => {
        const yearH5 = createElement('h5', group.year.toString());
        miDiv.appendChild(yearH5);
  
        const ul = createUlNoBullets();
        group.entries.forEach(e => {
          const li = createElement('li', e);
          ul.appendChild(li);
        });
        miDiv.appendChild(ul);
      });
      sec.appendChild(miDiv);
    }
  
    // Media Publications
    if (data.media_publications && data.media_publications.length) {
      const mpDiv = createElement('div');
      const mpTitle = createElement('h4', "Media Publications");
      mpDiv.appendChild(mpTitle);
  
      const ul = createUlNoBullets();
      data.media_publications.forEach(pub => {
        const li = createElement('li', `${pub.entry} (${pub.year})`);
        ul.appendChild(li);
      });
      mpDiv.appendChild(ul);
  
      sec.appendChild(mpDiv);
    }
  
    // Invited Talks
    if (data.invited_talks && data.invited_talks.length) {
      const itDiv = createElement('div');
      const itTitle = createElement('h4', "Invited Talks");
      itDiv.appendChild(itTitle);
  
      const ul = createUlNoBullets();
      data.invited_talks.forEach(talk => {
        const li = createElement('li', `${talk.entry} (${talk.year})`);
        ul.appendChild(li);
      });
      itDiv.appendChild(ul);
  
      sec.appendChild(itDiv);
    }
  
    // Leadership
    if (data.leadership && data.leadership.length) {
      const ldDiv = createElement('div');
      const ldTitle = createElement('h4', "Leadership");
      ldDiv.appendChild(ldTitle);
  
      data.leadership.forEach(lead => {
        const label = lead.year ? lead.year.toString() : (lead.years || "");
        const h5 = createElement('h5', label);
        ldDiv.appendChild(h5);
  
        const ul = createUlNoBullets();
        lead.entries.forEach(e => {
          const li = createElement('li', e);
          ul.appendChild(li);
        });
        ldDiv.appendChild(ul);
      });
      sec.appendChild(ldDiv);
    }
  }
  
  /**
   * MENTEES
   */
  function renderMentees(data, container) {
    const sec = renderSection(container, "Mentees", "mentees");
    data.forEach(group => {
      const div = createElement('div');
      const h5 = createElement('h5', group.years);
      div.appendChild(h5);
  
      const ul = createUlNoBullets();
      group.names.forEach(name => {
        const li = createElement('li', name);
        ul.appendChild(li);
      });
      div.appendChild(ul);
  
      sec.appendChild(div);
    });
  }
  
  /**
   * REFERENCES
   */
  function renderReferences(text, container) {
    if (!text) return;
    const sec = renderSection(container, "References", "references");
    sec.appendChild(createElement('p', text));
  }
  
  // BUILD EVERYTHING
  function buildResume(data) {
    const container = document.getElementById('resumeContainer');
  
    // Render top header (name, summary)
    renderHeader(data, container);
  
    // Render each main section
    renderEmployment(data.employment_history, container);
    renderEducation(data.education, container);
    renderAwards(data.awards_distinctions, container);
    renderPublications(data.research_publications, container);
    renderTeaching(data.teaching_guest_lectures, container);
    renderOutreach(data.outreach, container);
    renderMentees(data.mentees, container);
    renderReferences(data.references, container);
  }
  
  /**
   * Create a dropdown for jumping to each section by ID.
   * We'll call this after buildResume(data) in resume.html
   */
  function createSectionDropdown() {
    const sections = [
      { label: "Employment",   id: "employment" },
      { label: "Education",    id: "education" },
      { label: "Awards",       id: "awards" },
      { label: "Publications", id: "publications" },
      { label: "Teaching",     id: "teaching" },
      { label: "Outreach",     id: "outreach" },
      { label: "Mentees",      id: "mentees" },
      { label: "References",   id: "references" },
    ];
  
    // Get the <select> by ID
    const dropdown = document.getElementById("sectionDropdown");
  
    // Populate the dropdown
    sections.forEach(section => {
      const opt = document.createElement("option");
      opt.value = section.id;        // e.g. "employment"
      opt.textContent = section.label;
      dropdown.appendChild(opt);
    });
  
    // Scroll to the selected section on change
    dropdown.addEventListener("change", function() {
      const targetId = this.value;   // e.g. "employment"
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    });
  }