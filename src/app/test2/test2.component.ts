import { Component, OnInit } from '@angular/core';
import { generatedata } from 'src/assets/generatedata';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  data: any = generatedata(500, false);
  ngOnInit(){}
  
    getWidth() : any {
      if (document.body.offsetWidth < 850) {
        return '90%';
      }
      
      return 850;
    }
  
      source: any =
      {
          localdata: generatedata(500, false),
          datafields:
          [
              { name: 'name', type: 'string' },
              { name: 'productname', type: 'string' },
              { name: 'available', type: 'bool' },
              { name: 'date', type: 'date' },
              { name: 'quantity', type: 'number' }
          ],
          datatype: 'array'
      };
  
      dataAdapter: any = new jqx.dataAdapter(this.source);
  
      columns: any[] =
      [
          { text: 'Name', columntype: 'textbox', datafield: 'name', width: '20%' },
          { text: 'Product', datafield: 'productname', width: '35%' },
          { text: 'Ship Date', datafield: 'date', filtertype: 'date', width: '30%', cellsalign: 'right', cellsformat: 'd' },
          { text: 'Qty.', datafield: 'quantity', width: '15%', cellsalign: 'right' }
      ];
}
