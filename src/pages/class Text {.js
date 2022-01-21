class Text {
  selected_q() {
    return skills.any_q((skill) => {
      return skill.__lookup__(Sym.new(Peacock.symbol("parent"))).__eq__(
        this.props()
          .__lookup__(Sym.new(Peacock.symbol("skill")))
          .__or__(
            skill
              .__lookup__(Sym.new(Peacock.symbol("sub_skills")))
              .has_q(this.props().__lookup__(Sym.new(Peacock.symbol("skill"))))
          )
      );
    });
  }
}
