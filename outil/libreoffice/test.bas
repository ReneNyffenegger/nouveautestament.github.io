REM  *****  BASIC  *****



sub Main
end sub

Sub SetPageMO         ' margins and orientation
  Dim oViewCursor     'Current view cursor
  Dim oStyle          'Current page style
  oViewCursor = ThisComponent.CurrentController.getViewCursor()
  ' page style name
  Dim  pageStyle as String
  pageStyle = oViewCursor.PageStyleName
  ' get page style object
  oStyle = ThisComponent.StyleFamilies.getByName("PageStyles").getByName(pageStyle)
  ' set margins 
  '   .5" = 1270 (.5 * 2540)
  oStyle.BottomMargin = 1000
  oStyle.LeftMargin = 1000
  oStyle.RightMargin = 1000
  oStyle.TopMargin = 1000
  oStyle.Width = 20000
  oStyle.Height = 15000

  ' set orientation
  ' oStyle.IsLandscape = False ' 
  ' swap page dimensions
  temp = oStyle.Width
  oStyle.Width = oStyle.Height
  oStyle.Height = temp
End Sub     ' End SetPageMO