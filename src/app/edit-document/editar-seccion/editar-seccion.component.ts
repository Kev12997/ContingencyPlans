import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-editar-seccion',
  templateUrl: './editar-seccion.component.html',
  styleUrls: ['./editar-seccion.component.scss']
})
export class EditarSeccionComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  
  seccion: {
    category: string,
    body: string
  }[]= [
    {
      category: " Introducción, justificación y objetivos",
      body: `<p>GuardDV, Inc. es una compa&ntilde;&iacute;a comercial organizada bajo las leyes del estado de Delaware en abril del 2018 y registrada para hacer negocios en Puerto Rico. La compa&ntilde;&iacute;a tiene como misi&oacute;n ofrecer soluciones de seguridad en casos de violencia dom&eacute;stica. La fundadora, Dra. Zayira Jord&aacute;n, cre&oacute; una aplicaci&oacute;n m&oacute;vil que ofrece avisos a la v&iacute;ctima si el agresor se acerca y notifica al sistema 911 si el agresor viola una orden de protecci&oacute;n. La operaci&oacute;n de este servicio conlleva requisitos de seguridad que atienden a situaciones cr&iacute;ticas, espec&iacute;ficamente la seguridad de los servicios que redundan en garantizar la seguridad personal de un individuo que puede ser amenazado por otro individuo e incluso ser v&iacute;ctima fatal. El objetivo de este plan de contingencia es identificar las amenazas al servicio y minimizar su impacto en los servicios ofrecidos mediante la aplicaci&oacute;n m&oacute;vil. En otras palabras, el compromiso expresado en la misi&oacute;n de la compa&ntilde;&iacute;a es garantizar la seguridad de personas, en su mayor&iacute;a mujeres, v&iacute;ctimas de violencia dom&eacute;stica. El plan de contingencia busca documentar vulnerabilidades y trazar un protocolo formal para la atenci&oacute;n a ataques o fallas espec&iacute;ficas.</p> `
    },
    {
      category: " Introducción, justificación y objetivos 2",
      body: `GuardDV, Inc. es una compañía comercial organizada bajo las leyes del estado de
      Delaware en abril del 2018 y registrada para hacer negocios en Puerto Rico. La
      compañía tiene como misión ofrecer soluciones de seguridad en casos de violencia
      doméstica. La fundadora, Dra. Zayira Jordán, creó una aplicación móvil que ofrece
      avisos a la víctima si el agresor se acerca y notifica al sistema 911 si el agresor viola una
      orden de protección.
      La operación de este servicio conlleva requisitos de seguridad que atienden a situaciones
      críticas, específicamente la seguridad de los servicios que redundan en garantizar la
      seguridad personal de un individuo que puede ser amenazado por otro individuo e incluso
      ser víctima fatal.
      El objetivo de este plan de contingencia es identificar las amenazas al servicio y
      minimizar su impacto en los servicios ofrecidos mediante la aplicación móvil. En otras
      palabras, el compromiso expresado en la misión de la compañía es garantizar la seguridad
      de personas, en su mayoría mujeres, víctimas de violencia doméstica. El plan de
      contingencia busca documentar vulnerabilidades y trazar un protocolo formal para la
      atención a ataques o fallas específicas.`
    },
  ]
}
