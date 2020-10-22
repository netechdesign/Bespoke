
<table style="border: solid 1px;width: 100%;">
    <tbody>
       @foreach($data as $k =>$vl)
        <tr>
            <th style="border: solid 1px;" width="10%">Team Leader - {{$k}}</th>
            <th style="border: solid 1px;" width="5%">Week 1</th>
            <th style="border: solid 1px;" width="5%">Week 2</th>
            <th style="border: solid 1px;" width="5%">Week 3</th>
            <th style="border: solid 1px;" width="5%">Week 4</th>
            <th style="border: solid 1px;" width="5%">Total</th>
            <th style="border: solid 1px;"width="5%">Target</th>
        </tr>
        @foreach($vl as $ek =>$evl)
                  <tr>
                      <td style="border: solid 1px;">{{$evl->engineer}}</td>
                      <td style="border: solid 1px;">{{$evl->week_1}}</td>
                      <td style="border: solid 1px;">{{$evl->week_2}}</td>
                      <td style="border: solid 1px;">{{$evl->week_3}}</td>
                      <td style="border: solid 1px;">{{$evl->week_4}}</td>
                      <td style="border: solid 1px;">{{$evl->week_1+$evl->week_2+$evl->week_3+$evl->week_4}} </td>
                      <td style="border: solid 1px;">75</td>
                    </tr>
            @endforeach
        
        @endforeach
            
     </tbody>
</table> 
