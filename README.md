
# Офіційна сторінка для завалювання ідей

<label for="idea">Ідея стартапу:</label>
<div><script>
function clear_idea() {
  var idea = document.getElementById("idea");
  idea.value = '';
}
</script><textarea id="idea" name="idea" rows="4" cols="40" alt="Введіть текст вашої ідеї та натисність кнопку «FAIL»." onfocus="clear_idea()">
Введіть текст вашої ідеї та натисність кнопку «FAIL»...
</textarea></div><div><a class="gplusbtn" title="this is a button" href="#" onclick="clear_idea(); return false;">
      <span class="border">
      </span>
      <span class="button">
         <span class="button-inner">FAIL</span>
      </span>
</a></div>
