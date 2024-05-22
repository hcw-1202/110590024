$i     = 1;
echo '<table  border="1" id="table1"><tr>';

while($x < 9){

$x++;

        $check     =   $i%3;

        echo"<td>".$i."</td>";

        if(!$check && $i < 9){

                echo '</tr><tr>';

        }

$i++;

}

echo  '</table>';