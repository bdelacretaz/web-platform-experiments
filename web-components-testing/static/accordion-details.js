class AccordionDetails extends HTMLElement {
  constructor() {
    self = super();

    self.querySelectorAll('details').forEach(detail => {
      detail.addEventListener('toggle', self.detailsToggled);
    })

  }

  detailsToggled = function (e) {
    if(e.target.open) {
      self.querySelectorAll('details').forEach(detail => {
        if(detail != e.target && detail.open) {
          detail.removeAttribute('open');
        }
      })  
    }
  };
}

customElements.define('accordion-details', AccordionDetails);