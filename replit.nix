{ pkgs }: {
  deps = [
    pkgs.python3Minimal
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}